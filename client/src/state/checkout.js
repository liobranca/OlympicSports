import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteCartItems = createAsyncThunk("GET_PRODUCT", async () => {
    try {
        const res = await axios.delete("/api/checkout/")
        return res.data
    } catch (err) {
        return err.message
    }
})

export const addToHistorial = createAsyncThunk("ADD_TO_HISTORIAL", async () => {
    try {
        const res = await axios.post("/api/cartHistory/agregarAHistorial")
        return res.data
    } catch (err) {
        return err.message
    }
})

const checkoutReducer = createReducer(
    {},
    {
        [deleteCartItems.fulfilled]: (state,action) => action.payload,
        [addToHistorial.fulfilled]: (state,action) => action.payload
    }
)

export default checkoutReducer;