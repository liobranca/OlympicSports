import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const registerRequest = createAsyncThunk("REGISTER", ({name,lastname,email,password,state,city,address,zip,phone}) => {
    return axios.post("/api/users/register", {name, lastname, email, password, state, city, address, zip, phone})
      .then(res => res.data)
})

export const loginRequest = createAsyncThunk("LOGIN", ({email,password}) => {
  console.log(email)
    return axios.post("/api/users/login", {
        email: email.value,
        password: password.value,
      })
      .then(() => {
        return axios.get("/api/users/me")
            .then(res => res.data)
      })
})

export const getProfile = createAsyncThunk("GET_PROFILE", (setUserAdmin) => {
    return axios.get("/api/users/me")
      .then(user => {
        setUserAdmin(user.data.admin)
        return user.data
      })
})

export const getProfile2 = createAsyncThunk("GET_PROFILE", (setUser) => {
    return axios.get("/api/users/me")
      .then(res => setUser(res.data))
})

export const logoutRequest = createAsyncThunk("LOGOUT", () => {
    return axios.post("/api/users/logout")
      .then(res => res.data)
})

const authReducer = createReducer(
    {},
    {
        [registerRequest.fulfilled]: (state,action) => action.payload,
        [loginRequest.fulfilled]: (state,action) => action.payload,
        [getProfile.fulfilled]: (state,action) => action.payload,
        [logoutRequest.fulfilled]: (state,action) => action.payload,
        [getProfile2.fulfilled]: (state,action) => action.payload
    }
)

export default authReducer;