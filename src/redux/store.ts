import { UserModel } from "@/models/User.Model"
import { configureStore } from "@reduxjs/toolkit"

// Slice
import UserReducer from "./user/UserSlice"

export interface AppStore {
    user: UserModel
}

export default configureStore<AppStore>({
    reducer: {
        user: UserReducer
    }   
})