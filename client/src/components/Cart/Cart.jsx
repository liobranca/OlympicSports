import CartSummary from "./CartSummary";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getCartItems } from "../../state/cartItem";


function Cart({setShowCart, cartItems, setCartItemsDelete, total}) {

  const hideCartHandler = (e) => {
    e.preventDefault()
    setShowCart("cart")
  }

  const [cartItems2,setCartItems] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartItems(setCartItems))
  },[])


  return (
    <>
      <CartHeader hideCartHandler={hideCartHandler}/>
      {cartItems ? cartItems.map((item,i) => (
        <CartItem key={i} productId={item.productId} setCartItemsDelete={setCartItemsDelete}/>
      )) : (cartItems2.map((item,i) => (
        <CartItem key={i} productId={item.productId} setCartItemsDelete={setCartItemsDelete}/>
      )))}
      <CartSummary total={total}/>
    </>
  );
}

export default Cart;
