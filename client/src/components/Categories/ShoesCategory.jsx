import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";


import Card from "../../common/Card";
import { SimpleGrid } from "@chakra-ui/react";
import { getAllShoes } from "../../state/products";
import { getCartItems } from "../../state/cartItem";
import Pagination from "../../common/Pagination/Pagination";

export default function ShoesCategory() {
  
  const [shoes,setShoes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllShoes(setShoes))
  },[])

 //Get current posts
 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPost = shoes.slice(indexOfFirstPost, indexOfLastPost);

 //Change page
 const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(() => {
    dispatch(getCartItems())
  },[])

  return (
    <>
      <SimpleGrid minChildWidth="500px" spacing="30px">
        {currentPost.map((item, i) => (
          <Link key={i} to={`/product/${item.id}`}><Card item={item} /></Link>
        ))}
      </SimpleGrid>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={shoes.length}
        paginate={paginate}
        link="/shoes"
      />
    </>
  );
}