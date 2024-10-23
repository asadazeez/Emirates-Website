import axiosClient from "./config/axiosClient";
export const frontendApi = {
    getHomepage: async function () {
        return await axiosClient.get("home-page/");
    }
}