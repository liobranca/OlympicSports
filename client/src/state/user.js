import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const changeProfile = createAsyncThunk("CHANGE_PROFILE", async ({name,lastname,state,city,address,zip,phone}) => {
    try {
        const res = await axios.put(`/api/users/profile/`, {
        name: name.value,
        lastname: lastname.value,
        state: state.value,
        city: city.value,
        address:address.value,
        zip:zip.value,
        phone: phone.value
    })
        return res.data
    } catch (err) {
        return err.message
    }
})

export const changePassword = createAsyncThunk("CHANGE_PASSWORD", async ({password}) => {
    try {
        const res = await axios.put(`/api/users/changePassword/`, {password: password.value})
        return res.data
    } catch (err) {
        return err.message
    }
})

// export const googleLogin = createAsyncThunk("GOOGLE_LOGIN", async ({password}) => {
//     try {
//         const res = await axios.put(`/api/users/googlelogin/`, {password: password.value})
//         return res.data
//     } catch (err) {
//         return err.message
//     }
// })

const checkoutReducer = createReducer(
    {},
    {
        [changeProfile.fulfilled]: (state,action) => action.payload,
        [changePassword.fulfilled]: (state,action) => action.payload,
    }
)

export default checkoutReducer;