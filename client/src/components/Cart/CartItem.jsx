import { useEffect, useState } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";

import CartItemInput from "./CartItemInput";
import { getCartItemProducts } from "../../state/cartItem";

function CartItem({ productId , setCartItemsDelete }) {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItemProducts({setProducts, productId}))
  },[])

  return (
    <>
      {products.map((product, i) => (
        <CartItemModel key={i}>
          <CartProductItem>
            <img src={product.product.image} alt="Product"></img>
            <CartItemProductDetails>
              <h2>{product.product.name}</h2>
              <h4>$ {product.product.price * product.quantity}</h4>
              <p>Color: {product.product.color}</p>
              <p>Size: {product.product.size}</p>
            </CartItemProductDetails>
            <ProductSummary>
              <CartItemInput quantity={product.quantity} cartItemId={product.id} setCartItems={setCartItemsDelete} />
            </ProductSummary>
          </CartProductItem>
          <Divider />
        </CartItemModel>
      ))}
    </>
  );
}

const CartItemModel = styled.li`
  text-transform: uppercase;
  padding-top: 2em;
  padding-left: 1em;
  padding-right: 1em;

  img {
    max-width: 130px;
  }
`;

const CartItemProductDetails = styled.div`
  min-width: 30%;
  h2 {
    font-family: "TTrailer";
    font-size: 3.5rem;
    font-weight: 200;
    line-height: 60px;
  }

  h4 {
    font-size: 1.7rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    font-size: 0.6rem;
  }
`;

const CartProductItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5em;
`;

const ProductSummary = styled.div`
  position: relative;
  input {
    width: 60px;
    min-height: 40px;
    text-align: center;
    font-family: "Favorit";
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin-top: 5px;
  }

  input:focus {
    outline: none;
  }

  p {
    text-decoration: underline;
    margin-top: 2em;
    font-size: 0.8rem;
  }

  p:hover {
    cursor: pointer;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e7d6c4;
  border-width: 0.5px;
`;

export default CartItem;
