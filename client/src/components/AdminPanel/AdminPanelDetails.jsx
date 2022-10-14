import React from 'react'
import styled from "styled-components";

import productos from "../../assets/images/AdminPanel/productsPanel.png"  
import categorias from "../../assets/images/AdminPanel/categoriesPanel.png"
import usuarios from "../../assets/images/AdminPanel/usersPanel.png"
import { Link } from 'react-router-dom';



const AdminPanelDetails = () => {
    const categorylist = [
        { img: productos, name: "products Panel", link: "productsPanel"},
        { img: categorias, name: "categories Panel", link: "categoriesPanel" },
        { img: usuarios, name: "users Panel", link: "usersPanel"},
      ];

  return (
    <>
    <ul style={{marginTop:"80px"}}>
      {categorylist.map((item, i) => {
        return (
          <Link key={i} to={item.link}>
            <Item>
              <Img src={item.img} alt="" />
              <Name>{item.name}</Name>
            </Item>
          </Link>
        );
      })}
    </ul>
    </>
  )
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

export default AdminPanelDetails