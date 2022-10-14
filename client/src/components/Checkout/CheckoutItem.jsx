import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { getCartItemProducts } from "../../state/cartItem";

function CheckoutItem({ productId , quantity }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItemProducts({ setProducts, productId }));
  }, []);

  return (
    <>
      {products.map((product, i) => (
        <div key={i} className="item">
          <img src={product.product.image} alt="" />
          <div className="info">
            <h4>{product.product.name}</h4>
            <p className="quantity">Quantity: {quantity}</p>
            <p className="price">{product.product.price}$</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default CheckoutItem;
