import axios, {  AxiosResponse, InternalAxiosRequestConfig } from "axios"

export const AxiosInterceptors = () => {

    axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
        return request;
    })

    axios.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error) => {
            console.log("atrapado por el interceptor")
            return Promise.reject(error)
        }
    )

}