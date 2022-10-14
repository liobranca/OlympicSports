import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../state/products";

import "./ItemInfo.css";

function ItemInfo({ productId }) {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct({ setProduct, productId }));
  }, []);

  return (
    <>
      {product.map((item, i) => (
        <div
          key={i}
          className="iteminfo flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row my-3"
        >
          <div className="flex-shrink-0  w-36 h-36 bg-indigo-100 rounded-full inline-flex items-center justify-center my-5">
            <img src={item.image} alt="" />
          </div>
          <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
              {item.name}
            </h2>
            <p className="leading-relaxed my-3">{item.description}</p>
            <p className="font-bold">Price: {item.price} $</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemInfo;
