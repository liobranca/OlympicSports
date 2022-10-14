import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCartItems } from "../../state/cartItem";

import "./CheckoutForm.css";
import CheckoutWrapper from "./CheckoutWrapper";

function CheckoutForm() {

  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData () {
      const cartitems = await dispatch(getCartItems(setCartItems))
    }
    fetchData()
  },[])


  return (
    <>
      <CheckoutWrapper cartItems={cartItems}/>
    </>
  );
}

export default CheckoutForm;
