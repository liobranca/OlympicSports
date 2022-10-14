import styled from "styled-components";
import closeIcon from "../../assets/icons/close-fill.svg";

function CartHeader({hideCartHandler}) {
  return (
    <StyledCartHeader>
      <h1>
        Your <br />
        <span>Cart</span>
      </h1>
      <img src={closeIcon} alt="close cart" onClick={hideCartHandler} />
    </StyledCartHeader>
  );
}

const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-start;
  border-bottom: 0.5px solid #e7d6c4;
  padding: 3em;
  width: 100%;

  h1 {
    font-size: 4.5rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 60px;
    letter-spacing: -5px;
  }

  span {
    margin-left: 1em;
  }

  img {
    width: 30px;
    margin-left: 3em;
    align-self: center;
  }

  img:hover {
    cursor: pointer;
  }
`

export default CartHeader;
