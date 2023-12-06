import axios, {  AxiosResponse, InternalAxiosRequestConfig } from "axios"

// Components
import { managerNotifications } from "@/components/Toast/ReactToast";

export const AxiosInterceptors = () => {

    axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
        return request;
    })

    axios.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            managerNotifications.error("Error inesperado :c");
            return Promise.reject(error)
        }
    )

}