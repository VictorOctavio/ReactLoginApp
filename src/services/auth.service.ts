import axios from "axios";
import {AuthModel} from "@/models/Auth.model";

const URI = "https://jsonplaceholder.typicode.com";

export const loginUserService = (user: AuthModel) => {
    return {
        call: axios.get(`${URI}/users?email=${user.email}`)
    }
}