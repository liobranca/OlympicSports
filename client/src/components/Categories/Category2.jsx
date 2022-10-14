import React from "react";
import { Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import shirt from "../../assets/images/categories/shirt.png";
import shoes from "../../assets/images/categories/shoes.png";
import shorts from "../../assets/images/categories/shorts.png";
import pants from "../../assets/images/categories/pants.png";
import accesories from "../../assets/images/categories/accesories.png";

const ArticleList = () => {
  const categoria = [
    {
      img: shirt,
      link: "shirts",
      category: "SHIRTS",
    },
    {
      img: shorts,
      link: "shorts",
      category: "SHORTS",
    },
    {
      img: shoes,
      link: "shoes",
      category: "SHOES",
    },
    {
      img: pants,
      link: "pants",
      category: "PANTS",
    },
    {
      img: accesories,
      link: "accesories",
      category: "ACCESORIES",
    },
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      {categoria.map((cat, i) => (
        <div key={i} className="container px-5 py-24 mx-auto mt-2">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 mt-12">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                CATEGORY NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {cat.category}
              </h1>
              <div className="flex mb-4">
                <p
                  className="flex-grow text-black border-b-2 border-black py-2 text-lg px-1"
                  style={{ letterSpacing: "1px" }}
                >
                  Description
                </p>
              </div>
              <p
                className="leading-relaxed mb-4"
                style={{ letterSpacing: "1px" }}
              >
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
              </p>
              <NavLink to={`/${cat.link}`}>
                <div className="flex">
                  <button className="flex ml-auto text-white bg-pink-900 border-0 py-2 px-6 focus:outline-none hover:bg-pink-800 rounded">
                    {cat.category}
                  </button>
                </div>
              </NavLink>
            </div>

            <Image
              transform="scale(1.0)"
              src={cat.img}
              alt="some text"
              objectFit="contain"
              width="30%"
              marginLeft={20}
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.10)",
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ArticleList;
