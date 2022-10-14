import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import axios from "axios";

import { getSearchProduct } from "../state/products";
import SearchCard from "./CardSearch";
import Pagination from "./Pagination/Pagination";
import SearchPagination from "./Pagination/SearchPagination";

const SearchingProducts = () => {
  //SEARCH
  const [searchValue, setSearchValue] = useState("");
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const dispatch = useDispatch();

  const handleSearchProduct = (e) => {
    setSearchValue(e.target.value);
  };
  console.log(searchValue);
  const handleSearch = (e) => {
    console.log(searchValue);
    e.preventDefault();
    dispatch(getSearchProduct({ setItems, searchValue }));
  };

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = items.slice(indexOfFirstPost, indexOfLastPost);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // -- -- - -- - - - -- - - - - - -- - - - -- - - -- - - - - -- - -
  
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postsPerPage2] = useState(12);

  useEffect(() => {
    axios
      .get("/api/products/getAllProducts")
      .then((products) => setAllProducts(products.data))
      .catch((error) => console.log(error));
  }, []);

   //Get current posts
   const indexOfLastPost2 = currentPage2 * postsPerPage2;
   const indexOfFirstPost2 = indexOfLastPost2 - postsPerPage2;
   const currentPost2 = allProducts.slice(indexOfFirstPost2, indexOfLastPost2);

    //Change page
  const paginate2 = (pageNumber) => setCurrentPage2(pageNumber);
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className=" w-full h-20 rounded-[8rem] outline-none px-5 py-3 placeholder:text-slate-500 text-[1.1rem] text-black/50 mt-28 text-center "
          style={{fontSize:"24px"}}
          placeholder="Search for a product..."
          value={searchValue}
          onChange={handleSearchProduct}
        />
      </form>

      {items.length === 0 ? (
        <div>
        <SimpleGrid minChildWidth="500px" spacing="30px">
          {currentPost2.map((item, i) => (
            <Link key={i} to={`/product/${item.id}`}>
              <SearchCard item={item} />
            </Link>
          ))}
        </SimpleGrid>
        <SearchPagination
            postsPerPage2={postsPerPage2}
            totalPosts2={allProducts.length}
            paginate2={paginate2}
            link="/search"
          />
        </div>
      ) : (
        <div>
          <SimpleGrid minChildWidth="500px" spacing="30px">
            {currentPost.map((item, i) => (
              <Link key={i} to={`/product/${item.id}`}>
                <SearchCard item={item} />
              </Link>
            ))}
          </SimpleGrid>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={items.length}
            paginate={paginate}
            link="/search"
          />
        </div>
      )}
    </>
  );
};

export default SearchingProducts;
