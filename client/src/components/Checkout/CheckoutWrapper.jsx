import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { getTotal } from "../../state/cartUser";
import { addToHistorial, deleteCartItems } from "../../state/checkout";
import CheckoutItem from "./CheckoutItem";

function CheckoutWrapper({ cartItems }) {

  const [total, setTotal] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const cartItemsHandler = (e) => {
    e.preventDefault(e);
    dispatch(deleteCartItems());
    dispatch(addToHistorial());
    navigate("/")
  };

  useEffect(() => {
    dispatch(getTotal(setTotal));
  }, []);

  return (
    <>
      <div id="wrapper">
        <div className="container1">
          <div className="order">
            <h2>Your order summary</h2>
            {cartItems?.map((cartItem, i) => (
              <CheckoutItem key={i} productId={cartItem.productId} quantity={cartItem.quantity} />
            ))}

            <h3 className="total">TOTAL: {total.total}$</h3>
          </div>
        </div>
        <div className="container2">
          <div className="checkout">
            <div className="payment">
              <div className="content">
                <div className="infos">
                  <h2 className="text-center">Choose a payment method</h2>
                  <div className="flex flex-row">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/visa.png"
                      alt=""
                      className="visa"
                    />
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/mastercard.png"
                      alt=""
                      className="mastercard"
                    />
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1978060/paypal.png"
                      alt=""
                      className="paypal"
                    />
                  </div>
                  <div className="cardNumber">
                    <p className="title">Credit card number</p>
                    <br />
                    <input type="number" className="number" />
                    <input type="number" className="number" />
                    <input type="number" className="number" />
                    <input type="number" className="number" />
                  </div>
                  <div className="cardHolderName">
                    <p className="title">Card holder name</p>
                    <input type="text" />
                  </div>
                  <div className="expiration">
                    <p className="title">Expiration date</p>
                  </div>
                  <div className="select">
                    <select>
                      <option>Month</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>

                    <select className="select2">
                      <option>Year</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                      <option>2032</option>
                      <option>2033</option>
                      <option>2034</option>
                    </select>
                  </div>
                  <div className="security">
                    <p className="title">Security</p>
                  </div>
                  <div className="secutiryInput">
                    <input type="number" />
                  </div>
                  <button className="checkoutbtn" onClick={cartItemsHandler}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutWrapper;
