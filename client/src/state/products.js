import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllShirts = createAsyncThunk(
  "GET_ALL_SHIRTS",
  async (setShirts) => {
    try {
      const res = await axios.get(`/api/products/getProducts?categoria=shirts`);
      return setShirts(res.data);
    } catch (err) {
      return err.message;
    }
  }
);

export const getAllShorts = createAsyncThunk(
  "GET_ALL_SHORTS",
  async (setShorts) => {
    try {
      const res = await axios.get(`/api/products/getProducts?categoria=short`);
      return setShorts(res.data);
    } catch (err) {
      return err.message;
    }
  }
);

export const getAllPants = createAsyncThunk(
  "GET_ALL_PANTS",
  async (setPants) => {
    try {
      const res = await axios.get(`/api/products/getProducts?categoria=pants`);
      return setPants(res.data);
    } catch (err) {
      return err.message;
    }
  }
);

export const getAllShoes = createAsyncThunk(
  "GET_ALL_SHOES",
  async (setShoes) => {
    try {
      const res = await axios.get(`/api/products/getProducts?categoria=shoes`);
      return setShoes(res.data);
    } catch (err) {
      return err.message;
    }
  }
);

export const getAllAccesories = createAsyncThunk(
  "GET_ALL_ACCESORIES",
  async (setAccesories) => {
    try {
      const res = await axios.get(
        `/api/products/getProducts?categoria=accesories`
      );
      return setAccesories(res.data);
    } catch (err) {
      return err.message;
    }
  }
);

export const getProduct = createAsyncThunk(
  "GET_PRODUCT",
  async ({ setProduct, productId }) => {
    try {
      const res = await axios.get(
        `/api/products/getProduct?productId=${productId}`
      );
      return setProduct(res.data);
    } catch (err) {
      return err.message;
    }
  }
);

export const getProduct2 = createAsyncThunk("GET_PRODUCT", async (productId) => {
    try {
        const res = await axios.get(`/api/products/getProduct?productId=${productId}`)
        return res.data
    } catch (err) {
        return err.message
    }
})

export const getSearchProduct = createAsyncThunk(
  "GET_SEARCHPRODUCT",
  async ({ setItems , searchValue}) => {
    console.log("acaaaaaa",searchValue)
    try {
      const res = await axios.get(`/api/products/getProduct/${searchValue}`);
      console.log("ACAAA2",searchValue)
      setItems(res.data);
      return res.data
    } catch (err) {
      return err.message;
    }
  }
);

export const getAllProducts = createAsyncThunk( "GET_SEARCHPRODUCT", async (setProducts) => {
    try {
      const res = await axios.get("/api/products/getAllProducts")
      setProducts(res.data);
      return res.data
    } catch (err) {
      return err.message;
    }
  }
);




 
const productReducer = createReducer(
  {},
  {
    [getAllShirts.fulfilled]: (state, action) => action.payload,
    [getAllShorts.fulfilled]: (state, action) => action.payload,
    [getAllPants.fulfilled]: (state, action) => action.payload,
    [getAllShoes.fulfilled]: (state, action) => action.payload,
    [getAllAccesories.fulfilled]: (state, action) => action.payload,
    [getProduct.fulfilled]: (state, action) => action.payload,
    [getSearchProduct.fulfilled]: (state, action) => action.payload,
    [getAllProducts.fulfilled]: (state, action) => action.payload,
  }
);

export default productReducer;
