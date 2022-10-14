import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ChangePassword from "./pages/ChangePassword";
import Checkout from "./pages/Checkout";

import Home from "./pages/Home";
import NotFound from "./common/NotFound/NotFound";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Shirts from "./pages/Shirts";
import Shorts from "./pages/Shorts";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import Accesories from "./pages/Accesories";
import SearchProducts from "./pages/SearchProducts";
import Categories from "./pages/Categories";
import AdminPanel from "./pages/AdminPanel";
import UsersPanel from "./components/AdminPanel/UsersPanel/UsersPanel";
import ProductsPanel from "./components/AdminPanel/ProductsPanel/ProductsPanel";
import Historial from "./pages/Historial";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/forgotpassword" element={<ChangePassword />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shirts" element={<Shirts />} />
      <Route path="/shorts" element={<Shorts />} />
      <Route path="/pants" element={<Pants />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/accesories" element={<Accesories />} />
      <Route path="/search" element={<SearchProducts />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/*" element={<Navigate to={"404"} />} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/adminPanel" element={<AdminPanel/>} />
      <Route path="/adminPanel/usersPanel" element={<UsersPanel/>} />
      <Route path="/adminPanel/productsPanel" element={<ProductsPanel/>} />
      {/* <Route path="/categories Panel" element={<CategoriesPanel/>} /> */}
      <Route path="/historial" element={<Historial/>} />
    </Routes>
  );
}

export default App;
