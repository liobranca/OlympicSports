import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartUser = createAsyncThunk("GET_ALL_CARTITEMS", async () => {
    try {
        const res = await axios.put("/api/cartUser")
        return res.data
    } catch (err) {
        return err.message
    }
})

export const getTotal = createAsyncThunk("GET_ALL_CARTITEMS", async (setTotal) => {
    try {
        const res = await axios.get("/api/cartUser/getCart")
        setTotal(res.data)
        return res.data
    } catch (err) {
        return err.message
    }
})

export const getTotal2 = createAsyncThunk("GET_ALL_CARTITEMS", async (setTotal2) => {
    try {
        const res = await axios.get("/api/cartUser/getCart")
        setTotal2(res.data)
        return res.data
    } catch (err) {
        return err.message
    }
})


const cartUserReducer = createReducer(
    {},
    {
        [getCartUser.fulfilled]: (state,action) => action.payload,
    }
)

export default cartUserReducer;