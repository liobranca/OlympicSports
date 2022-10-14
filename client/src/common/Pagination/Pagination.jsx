import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate, link }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center  ">
      <nav className="isolate inline-flex -space-x-px rounded-md ">
        {pageNumbers.map((number,i) => (
          <Link key={i} onClick={() => paginate(number)} to={link}>
            <li
              key={number}
              className=" relative z-10 inline-flex items-center border border-white bg-black px-4 py-2 text-4xl hover:bg-yellow-800 font-medium text-white focus:z-20"
            >
              {number}
            </li>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default Pagination;
