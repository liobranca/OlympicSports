import React from "react";
import styled from "styled-components";

import accesories from "../../../assets/images/categories/accesories.png";
import shoes from "../../../assets/images/categories/shoes.png";
import shirt from "../../../assets/images/categories/shirt.png";
import pants from "../../../assets/images/categories/pants.png";
import shorts from "../../../assets/images/categories/shorts.png";

import icon from "../../../assets/icons/ball-basketball-icon.svg";
import { Link } from "react-router-dom";

function Category() {
  const categorylist = [
    { img: accesories, icon: icon, name: "accesories" },
    { img: shoes, icon: icon, name: "shoes" },
    { img: shirt, icon: icon, name: "shirts" },
    { img: pants, icon: icon, name: "pants" },
    { img: shorts, icon: icon, name: "shorts" },
  ];

  return (
    <ul>
      {categorylist.map((item, i) => {
        return (
          <Link key={i} to={item.name}>
            <Item>
              <Img src={item.img} alt="" />
              <Name>{item.name}</Name>
            </Item>
          </Link>
        );
      })}
    </ul>
  );
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #141414;
  background-color: #e7d6c4;
  padding: 1em 0;

  text-transform: uppercase;

  &:hover {
    cursor: grab;
  }
  img + img {
    max-width: 80px;
  }
`;

const Img = styled.img`
  max-height: 150px;
  object-fit: contain;
`;

const Name = styled.h4`
  text-transform: uppercase;
  font-family: "TTrailer";
  font-weight: 300;
  font-size: 4.6rem;
  letter-spacing: -1.8px;
  line-height: 1em;
`;

export default Category;
