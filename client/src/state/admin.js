import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const editProduct = createAsyncThunk("EDIT_PRODUCT", async ({producto,data}) => {
    try {
        const res = await axios.put(`/api/products/updateProduct/${producto.id}`, {name: data.name, color: data.color, size:[data.size], brand:data.brand, price: data.price, stock: data.stock, categoria: data.categoria, description: data.description})
        return res.data
    } catch (err) {
        return err.message
    }
})

export const addProduct = createAsyncThunk("ADD_PRODUCT", async ({data}) => {
    try {
      const res = await axios.post(`/api/products/createProduct/`, {name: data.name, color: data.color, size:[data.size], brand:data.brand, price: data.price, stock: data.stock, categoria: data.categoria, description: data.description})
      return res.data
    } catch (err) {
      return err.message;
    }
  }
  );

  export const deleteProduct = createAsyncThunk("DELETE_PRODUCT", async (producto) => {
    try {
      const res = await axios.delete(`/api/products/deleteProduct/${producto.id}`)
      return res.data
    } catch (err) {
      return err.message;
    }
  }
  );

const adminReducer = createReducer(
    {},
    {
        [editProduct.fulfilled]: (state,action) => action.payload,
        [addProduct.fulfilled]: (state,action) => action.payload,
        [deleteProduct.fulfilled]: (state,action) => action.payload,
    }
)

export default adminReducer;