import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getProfile, logoutRequest } from "../state/auth";
import Cart from "../components/Cart/Cart";
import "./Cart.css";

import { Link as LinkButton } from "@chakra-ui/react";
import axios from "axios";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showCart, setShowCart] = useState("cart");

  //CART
  const showCartHandler = (e) => {
    e.preventDefault();
    setShowCart("cart cart-active");
  };

  //popup
  const [popUp, setPopUp] = useState(false);

  const togglePopUp = () => setPopUp(!popUp);

  //

  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //userAdmin
  const [userAdmin, setUserAdmin] = useState(false)

  

  useEffect(() => {
    dispatch(getProfile(setUserAdmin));
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutRequest());
    navigate("/");
    window.location.reload()
  };

  return (
    <>
      <nav>
        <div className="shadow-md w-full fixed top-0 left-0 z-10">
          <div className="md:flex items-center justify-between py-4 bg-[#fcf9ee] md:px-1 px-7 h-20">
            <div className="font-bold text-1xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
              >
                <ion-icon name={open ? "close" : "menu"}></ion-icon>
              </div>
              <ul
                className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                  open ? "top-20" : "top-[-390px]"
                } bg-[#fcf9ee] z-10`}
              >
                {open ? (
                  <Link to={"/search"}>
                    <li className="md:ml-8  md:my-0 my-7">
                      <Search>SEARCH</Search>
                      <span className="text-1xl ml-2 ">
                        <ion-icon name="search-outline"></ion-icon>
                      </span>
                    </li>
                  </Link>
                ) : (
                  ""
                )}
                {open ? (
                  <Link to="/login">
                    <li className="md:ml-8 text-1xl md:my-0 my-7">
                      <Profile>PROFILE</Profile>
                      <span className="ml-2">
                        <ion-icon name="person-outline"></ion-icon>
                      </span>
                    </li>
                  </Link>
                ) : (
                  ""
                )}
                {open ? (
                  <li className="md:ml-8 text-1xl md:my-0 my-7">
                    <LinkButton href="" onClick={showCartHandler}>
                      <CartItem>CART</CartItem>
                      <span className="ml-5">
                        <ion-icon name="cart-outline" />
                      </span>
                    </LinkButton>
                  </li>
                ) : (
                  ""
                )}

                {open ? (
                  <Link to="/">
                    <li className="md:ml-8 text-1xl md:my-0 my-7">
                      <Home>HOME</Home>
                      <span className="ml-4">
                        <ion-icon name="home-outline"></ion-icon>
                      </span>
                    </li>
                  </Link>
                ) : (
                  <Link to="/">
                    <li className="md:ml-8 text-1xl md:my-0 my-7">HOME</li>
                  </Link>
                )}

                {open ? (
                  <Link to={"/categories"}>
                    <li className="md:ml-8 text-1xl md:my-0 my-7">
                      <Categorias>CATEGORIAS</Categorias>
                      <span className="ml-5">
                        <ion-icon name="bookmarks-outline" />
                      </span>
                    </li>
                  </Link>
                ) : (
                  <Link to={"/categories"}>
                    <li className="md:ml-8 text-1xl md:my-0 my-7">
                      CATEGORIAS
                    </li>
                  </Link>
                )}
                
                {open && userAdmin ? (
                  <Link to={"/adminPanel"}>
                  <li className="md:ml-8 text-1xl md:my-0 my-7">
                    <Categorias>Admin Panel</Categorias>
                    <span className="ml-5">
                    <ion-icon name="shield-checkmark-outline"/>
                    </span>
                  </li>
                  </Link>
                ) : userAdmin ? (
                  ( <Link to={"/adminPanel"}>
                    <li className="md:ml-8 text-1xl md:my-0 my-7">ADMIN PANEL</li>
                    </Link>
                  )
                ):
                ""
                }
                    


              </ul>
            </div>

            <Link to="/">
              <div className="font-bold text-3xl cursor-pointer items-center font-[Poppins] text-gray-800 md:hidden lg:flex">
                <span className="text-2xl text-orange-600 mr-1 pt-2">
                  <ion-icon name="basketball-outline" />
                </span>
                OlympicSports
              </div>
            </Link>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "hidden" : "top-[-490px]"
              } bg-[#fcf9ee] z-100`}
            >
              <li className="md:ml-8 text-1xl md:my-0 my-7">
                <span className="text-2xl mr-1 pt-2">
                  <LinkButton href="" onClick={showCartHandler}>
                    <ion-icon name="cart-outline" />
                  </LinkButton>
                </span>
              </li>
              <li className="md:ml-8 text-1xl md:my-0 my-7">
                <span className="text-2xl mr-1 pt-2 hover:cursor-pointer">
                  <ion-icon onClick={togglePopUp} name="person-outline" />

                  {user.id ? (
                    <DropMenu activeState={popUp}>
                      <div className="btn flex dropmenu">
                        <Link className="ml-1" to="/profile">
                          <label className="hover:cursor-pointer mx-6">
                            PROFILE
                          </label>
                        </Link>
                      </div>

                      <div className="btn flex dropmenu">
                        <Link className="ml-1" to="/historial ">
                          <label className="hover:cursor-pointer mx-4">
                            HISTORIAL
                          </label>
                        </Link>
                      </div>

                      <div className="btn flex dropmenu">
                        <label
                          onClick={handleLogout}
                          className="hover:cursor-pointer mx-6"
                        >
                          LOGOUT
                        </label>
                      </div>
                    </DropMenu>
                  ) : (
                    <DropMenu activeState={popUp}>
                      <div className="btn flex dropmenu">
                        <Link className="ml-3" to="/login">
                          <label className="hover:cursor-pointer mx-6">
                            LOGIN
                          </label>
                        </Link>
                      </div>

                      <div className="btn flex dropmenu">
                        <Link to="/register">
                          <label className="hover:cursor-pointer mx-6">
                            REGISTER
                          </label>
                        </Link>
                      </div>
                    </DropMenu>
                  )}
                </span>
              </li>
              <li className="md:ml-8 text-1xl md:my-0 my-7">
                <span className="text-2xl mr-5 pt-10">
                  <Link to="/search">
                    <ion-icon name="search-outline" />
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* CART */}

      <div className={showCart}>
        <Cart setShowCart={setShowCart} />
      </div>
    </>
  );
};

const DropMenu = styled.div`
  font-family: "Avenir";
  font-size: 22px;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 0px 0px;
  opacity: 0.85;

  margin-top: 20px;

  display: ${(event) => (event.activeState ? "flex" : "none")};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  position: absolute;
  top: 4.75vh;
  right: 0.5rem;
`;

const Search = styled.span`
  margin-left: 40vw;
  @media screen and (max-width: 490px) {
    margin-left: 35vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 30vw;
  }
`;
const Profile = styled.span`
  margin-left: 40vw;
  @media screen and (max-width: 490px) {
    margin-left: 35vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 30vw;
  }
`;
const CartItem = styled.span`
  margin-left: 41.5vw;
  @media screen and (max-width: 490px) {
    margin-left: 37.5vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 32.5vw;
  }
`;
const Home = styled.span`
  margin-left: 41vw;
  @media screen and (max-width: 490px) {
    margin-left: 36vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 31vw;
  }
`;
const Categorias = styled.span`
  margin-left: 37.5vw;
  @media screen and (max-width: 490px) {
    margin-left: 32.5vw;
  }
  @media screen and (max-width: 450px) {
    margin-left: 27.5vw;
  }
`;

export default Navbar;
