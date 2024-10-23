"use client"
import Image from "next/image";
import React from "react";
import image from "@public/Rectangle 21.jpg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { userApi } from "../apis/userApi";
import toast from "react-hot-toast";
import  Cookies  from "js-cookie";
import { useRouter } from "next/navigation";

const Schema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .refine((data) => data.trim() !== "", {
        message: "Name cannot be an empty string",
      }),
    emailAddress: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(5, { message: "Must be 5 or more characters long" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Must be 5 or more characters long" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });
  type TSchema = z.infer<typeof Schema>;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });

  const router = useRouter()

  const submitData = async (data: unknown) => {
    try {
      const response = await userApi.createUser(data);

      if (!response.data.success) {
        toast.error(response.data.message);
      } else {
        toast.success(response.data.message);
        window.localStorage.setItem("accessToken", response.data.accessToken);
        Cookies.set("accessToken", response.data.accessToken);
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
   
      <div className="flex text-black md:px-[60px] sm:px-8 h-[508px] justify-center bg-[#E7E7E3]">
        <div className="flex flex-col justify-center w-full max-w-md p-8 sm:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Register</h2>

          <form onSubmit={handleSubmit(submitData)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full p-2 mt-1 border bg-transparent border-black rounded-md placeholder:  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Name"
                {...register("name")}
              />
              <p className="text-xs text-red-700">{errors.name?.message}</p>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                {...register("emailAddress")}
                id="email"
                className="w-full p-2 mt-1 border bg-transparent border-black rounded-md placeholder:  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
              />
              <p className="text-xs text-red-700">
                {errors.emailAddress?.message}
              </p>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                className="w-full p-2 mt-1 border bg-transparent border-black rounded-md placeholder:  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
              />
              <p className="text-xs text-red-700">{errors.password?.message}</p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700">
                Confirm Password
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                className="w-full p-2 mt-1 border bg-transparent border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm Password"
              />
              <p className="text-xs text-red-700">
                {errors.confirmPassword?.message}
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors"
            >
              Register
            </button>
          </form>
        </div>

        <div className="hidden sm:flex items-center justify-center p-8">
          <Image
            src={image}
            alt="Promotional Image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
  );
};

export default SignUpPage;
