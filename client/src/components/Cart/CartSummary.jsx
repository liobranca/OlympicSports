import { Link } from "react-router-dom"

import { CartBtn } from "../../common/CartBtn";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getTotal2 } from "../../state/cartUser";
import { useDispatch } from "react-redux";

function CartSummary({total}) {

  const [total2,setTotal2] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal2(setTotal2))
  },[])

  return (
    <>
    <CheckoutSummary>
      <div>
        <h4>Subtotal</h4>
        <h4>$ {total ? (total.total) : (total2.total)} USD</h4>
      </div>
      <Link to="/checkout"><CartBtn>PROCEED</CartBtn></Link>
    </CheckoutSummary>
    </>
  );
}

const CheckoutSummary = styled.div`
  padding: 2em;
  margin-top: 1em;
  background-color: #141414;
  color: #fcf9ee;
  text-transform: uppercase;

  div {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }

  button {
    color: #141414;
  }
`;

export default CartSummary;
