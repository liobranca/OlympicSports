import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Cart from "../Cart/Cart";

import "./Cart.css";

import {
  ProductTitle,
  ProductDetails,
  ProductPriceInfo,
  ProductImage,
  ProductDescription,
  ProductOtherInfo,
  ProductShippingInfo,
  ProductOtherInfoTitle,
  AddToCartButton,
  Wrapper,
} from "./styledComponents";

import { Link } from "@chakra-ui/react";
import AddToCartButton2 from "./AddToCartButton/AddToCartButton2";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux"
import { getProduct } from "../../state/products";
import { getProfile } from "../../state/auth";
import { addCartItem, getCartItems } from "../../state/cartItem";
import { getCartUser, getTotal } from "../../state/cartUser";
  
function ProductDetail() {
  const [showCart, setShowCart] = useState("cart");

  const params = useParams();
  const productId = params.id;
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth)

  const [product, setProduct] = useState([]);
  const [cartItems,setCartItems] = useState([]);
  const [total,setTotal] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const getProducts = dispatch(getProduct({setProduct,productId}))
      const getMyProfile = dispatch(getProfile())
      Promise.all([getProducts,getMyProfile,getTotal])
    }

    fetchData()
  },[])

  const addToCartHandler = async (e) => {
    e.preventDefault();
    const addCartItems = await dispatch(addCartItem({userId : user.id , productId : product[0].id, price: product[0].price}))
    const getCartItem = await dispatch(getCartItems(setCartItems));
    const actualizeTotal = await dispatch(getCartUser())
    const gtotal = await dispatch(getTotal(setTotal))
    const showCart = await setShowCart("cart cart-active")
  };

  return (
    <>
      {product.map((item, i) => (
        <Wrapper
          key={i}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut" }}
        >
          <ProductDetails>
            <section>
              <ProductTitle
                initial={{
                  overflow: "hidden",
                  minHeight: "10em",
                  position: "relative",
                }}
              >
                <motion.div
                  initial={{
                    position: "absolute",
                    bottom: "-100px",
                    left: "0px",
                    minHeight: "inherit",
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  animate={{ bottom: "0px" }}
                >
                  <h4>{item.categoria}</h4>
                  <h1>{item.name}</h1>
                </motion.div>
              </ProductTitle>

              <ProductPriceInfo>
                <p>$ {item.price + 25} usd</p>
                <h3>$ {item.price} USD</h3>
              </ProductPriceInfo>

              <ProductImage>
                <motion.div
                  initial={{ y: 50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  animate={{ y: 0 }}
                >
                  <img
                    src={item.image1}
                    alt=""
                  />
                </motion.div>
                <div>
                  <p>side</p>
                </div>
              </ProductImage>

              <ProductDescription>
                {item.description}
              </ProductDescription>
            </section>

            <ProductOtherInfo>
              <ProductOtherInfoTitle>{item.brand}</ProductOtherInfoTitle>

              <ProductImage>
                <div>
                <img
                    src={item.image2}
                    alt=""
                  />
                </div>
                <div>
                  <p>view</p>
                  <p>(01)</p>
                </div>
              </ProductImage>

              <ProductImage>
                <div>
                <img
                  src={item.image3}
                  alt=""
                />
                </div>
                <div>
                  <p>view</p>
                  <p>(01)</p>
                </div>
              </ProductImage>

              <ProductShippingInfo>
                <p>shipping worldwide</p>
                <p>free shipping on all orders</p>
              </ProductShippingInfo>
            </ProductOtherInfo>

            <AddToCartButton
              className="xl:hidden"
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link onClick={addToCartHandler}>Add to cart</Link>
            </AddToCartButton>

            <div className="sm:hidden md:hidden lg:hiden xl:flex">
              <AddToCartButton2 addToCartHandler={addToCartHandler} item={item} />
            </div>

            <hr />
          </ProductDetails>
        </Wrapper>
      ))}

      {/* CART */}

      <div className={showCart}>
        <Cart setShowCart={setShowCart} cartItems={cartItems} setCartItemsDelete={setCartItems} total={total} />
      </div>
    </>
  );
}

export default ProductDetail;
