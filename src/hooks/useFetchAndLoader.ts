import {useState} from "react"
import { AxiosResponse } from "axios";
import { AxiosCall } from "@/models/AxiosCall.model";

export default function useFetchAndLoader(){

    const [loading, setLoading] = useState<boolean>(false);

    const callEndpoint  = async(axiosCall: AxiosCall<any>) => {
        
        setLoading(true);

        let result = {} as AxiosResponse<any>
        
        try{
            result = await axiosCall.call
        }catch(err){
            return Promise.reject(err)
        }finally{
            setLoading(false);
        } 


        return result.data;
    }

    return {loading, callEndpoint}
}