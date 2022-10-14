import circleIcon from "../assets/icons/circle-container.svg";
import arrowIcon from "../assets/icons/arrow.svg";
import styled from "styled-components";

function Btn(props) {
  return (
    <Button>
      <p>{props.title}</p>
      <Icon>
        <img className="btnCircle" src={circleIcon} alt=""></img>
        <img className="btnArrow" src={arrowIcon} alt=""></img>
      </Icon>
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2em;

  p {
    text-transform: uppercase;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 500;
  }

  p:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div`
  position: relative;
  margin-left: 0.7em;

  &:hover {
    cursor: pointer;
    animation-name: rotation;
    animation-duration: 0.4s;

    @keyframes rotation {
      from {
        transform: rotate(360deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  }

  img {
    width: clamp(2.5rem, 5vw, 5rem);
  }

  img:first-child {
    position: absolute;
    right: 0;
  }

  img:last-child {
    padding: 0.6em;
  }
`;

export default Btn;
