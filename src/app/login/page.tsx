"use client"
import Image from 'next/image';
import React from 'react'
import image from "@public/Rectangle 21.jpg";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { userApi } from '../apis/userApi';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";




const Schema = z.object({
  emailAddress: z.string().email({ message: "*Invalid email address" }),
  password: z.string().min(5, { message: "*Must be 5 or more characters long" }),
});
type TSchema = z.infer<typeof Schema>;


const LoginPage = () => {
    const {
      register,
      handleSubmit,
      formState: { errors, },
    } = useForm<TSchema>({ resolver: zodResolver(Schema) });
    const router = useRouter();


const submitData = async (data: unknown) => {
  const response = await userApi.loginUser(data);

  if (!response.data.success) {
    toast.error(response.data.message);
  } else {
    toast.success(response.data.message);
    window.localStorage.setItem("accessToken", response.data.accessToken);
    Cookies.set("accessToken", response.data.accessToken);
    router.push("/");
    router.refresh();
  }
};
    
  return (
    <div>
      <div className="flex md:px-[60px] sm:px-8  h-[508px] text-black justify-center bg-[#E7E7E3]">
        <div className="flex flex-col justify-center w-full max-w-md p-8 sm:w-1/2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Login</h2>

          <form className="space-y-4" onSubmit={handleSubmit(submitData)}>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 mt-1 border bg-transparent border-black rounded-md placeholder:  focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
                {...register("emailAddress")}
              />
              <p className="text-xs text-red-700">
                {errors.emailAddress?.message}
              </p>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 mt-1 border bg-transparent border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Password"
                {...register("password")}
              />
              <p className="text-xs text-red-700">{errors.password?.message}</p>
            </div>

            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors"
            >
              Email Login
            </button>
          </form>
          <div className="text-center lg:flex font-sofia gap-1 justify-center font-bold pt-3">
            <p>Still need an account?</p>
            <Link
              href={"/sign-up"}
              className="text-[#b2181e] hover:text-violet-700"
            >
              Register here.
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center p-8">
          <Image
            src={image}
            alt="Promotional Image"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage