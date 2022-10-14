import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger"
import adminReducer from "./admin";


import authReducer from "./auth";
import cartHistoryReducer from "./cartHistory";
import cartItemReducer from "./cartItem";
import cartUserReducer from "./cartUser";
import checkoutReducer from "./checkout";
import productReducer from "./products";


const store = configureStore({
    //  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        auth: authReducer,
        products: productReducer,
        cartItems: cartItemReducer,
        cartUser: cartUserReducer,
        checkout: checkoutReducer,
        history: cartHistoryReducer,
        admin: adminReducer
    }
})

export default store