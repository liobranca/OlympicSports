import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { deleteItem, getCartItems } from "../../state/cartItem";
import { getCartUser } from "../../state/cartUser";

function CartItemInput({quantity, cartItemId, setCartItems}) {

  const dispatch = useDispatch()

  const DeleteItem = async (e) => {
    e.preventDefault();
    const addCartItems = await dispatch(deleteItem(cartItemId))
    const actualizeTotal = await dispatch(getCartUser())
    const getCartItem = await dispatch(getCartItems(setCartItems));
  };

  return (
    <>
      <NumberInput defaultValue={quantity} maxW="70px">
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <br/>
      <br/>
      <br/>
      <TrashIcon><FontAwesomeIcon className="hover:cursor-pointer" onClick={DeleteItem} icon={faTrash} /></TrashIcon>
    </>
  );
}

const TrashIcon = styled.div`
  margin-left: 20px;
`

export default CartItemInput;
