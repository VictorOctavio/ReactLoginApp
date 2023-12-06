import { addItem, getItem, removeItem } from "@/utilities/localstorage.utility"
import { createSlice } from "@reduxjs/toolkit"

const initializeState = {
    token: '',
    name: '',
    email: '',
    phone: '',
    geo: {lat: "", long: ""}
}

export const userSlice = createSlice({
    name: "user",
    initialState: getItem('user') ? JSON.parse(getItem('user') as string) : initializeState,
    reducers: {
        signin(state, action){
            addItem("user", action.payload)
            return {...action.payload}
        },

        signup(state, action){
            addItem("user", action.payload)
            return {...action.payload}
        },

        logout(){
            removeItem("user")
            return { initializeState }
        }
    }
})

export const { signin, signup, logout } = userSlice.actions;
export default userSlice.reducer;