import { UserModel } from "@/models/User.Model";

export const userAdapter = (user: any): UserModel => {
    return {
        email: user.email,
        name: user.name,
        phone: user.phone,
        geo: user.address.geo     
    }
}