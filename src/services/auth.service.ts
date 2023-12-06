import axios from "axios";
import {AuthModel} from "@/models/Auth.model";
import { faker } from "@faker-js/faker";

const URI = "https://jsonplaceholder.typicode.com";

export const loginUserService = (user: AuthModel) => {
    return {
        call: axios.get(`${URI}/users/${faker.datatype.number({ min: 1, max: 9 })}`)
    }
}