import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartHistory = createAsyncThunk("GET_CARTHISTORY_ITEMS", async () => {
    try {
        const res = await axios.get(`/api/cartHistory`)
        return res.data
    } catch (err) {
        return err.message
    }
})



const cartHistoryReducer = createReducer(
    {},
    {
        [getCartHistory.fulfilled]: (state,action) => action.payload,
    }
)

export default cartHistoryReducer;