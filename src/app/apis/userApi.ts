/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "./config/axiosClient";

export const userApi = {
  createUser: async function (body: any) {
    return await axiosClient.post("user/create", body);
  },
  loginUser: async function (body: any) {
    return await axiosClient.post("user/login/", body);
  },
  updateUser: async function (body: any) {
    return await axiosClient.post("user/update/", body);
  },
};
