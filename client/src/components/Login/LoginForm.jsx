import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

import styled from "styled-components";
import leftLogin from "../../assets/images/login/leftLogin1.png";
import rightLogin from "../../assets/images/login/rightLogin1.png";

import { log, success, error } from "../../utils/logs";
import { useInput } from "../../hooks/useInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../state/auth";
import axios from "axios";

function LoginForm() {
  const email = useInput("email");
  const password = useInput("password");
  const emailAdmin = {value:"admin@gmail.com"};
  const passwordAdmin = {value:"admin"}

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sucessGoogleResponse = (tokenResponse) => {
    axios
      .put("/api/users/googlelogin", { credential: tokenResponse.credential })
      .then(() => navigate("/"))
  };

  const handleLogin = (e) => {
    e.preventDefault();
    log("login attempt...");
    dispatch(loginRequest({ email, password }))
      .then(() => {
        success(`You are logged!`);
        navigate("/");
      })
      .catch((res) => error(res.status, res.statusText));
  };

  const handleLoginAdmin = (e)=> {
    e.preventDefault()
    log("login attempt....")
    dispatch(loginRequest({email: emailAdmin,password:passwordAdmin}))
    .then(()=> {
      success("You are logged as Admin!")
      navigate("/")
    })
    .catch((res) => error(res.status, res.statusText))
  }

  return (
    <Flex
      minH={"89vh"}
      align={"center"}
      justify={"center"}
      className="sm:flex-col xl:flex-row"
    >
      <Img
        className="relative mr-20 imgLeft"
        src={leftLogin}
        alt=""
        height={500}
        width={500}
      />
      <Stack spacing={8} className="lg:w-[550px] mx-20" py={12} px={6}>
        <Stack align={"center"}>
          <h1 className="font-Avenir text-4xl">Login</h1>
        </Stack>
        <Box p={8} as={"form"} onSubmit={handleLogin}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel className="font-Avenir">
                <span className="text-xs" style={{ letterSpacing: "2px" }}>
                  EMAIL
                </span>
              </FormLabel>
              <Input
                borderColor="black"
                focusBorderColor="black"
                type="email"
                {...email}
              />
            </FormControl>
            <FormControl id="password">
              <div>
                <FormLabel className="font-Avenir">
                  <span
                    className="text-xs float-left mb-1"
                    style={{ letterSpacing: "2px" }}
                  >
                    PASSWORD
                  </span>
                </FormLabel>
                <Link
                  to="/forgotpassword"
                  className="font-Avenir text-xs float-right "
                >
                  Forgot password?
                </Link>
              </div>
              <Input
                borderColor="black"
                focusBorderColor="black"
                type="password"
                minWidth="350px"
                {...password}
              />
            </FormControl>
            <Stack spacing={10}>
              <button
                className="font-Avenir font-bold pt-5 text-md"
                style={{ letterSpacing: "2px" }}
              >
                SIGN IN
              </button>

              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-700"></span>
                <span className="text-gray-400 font-normal">or</span>
                <span className="h-px w-16 bg-gray-700"></span>
              </div>
              <div className="flex justify-center gap-5 w-full ">
                <div className="flex justify-center">
                  <GoogleLogin
                    onSuccess={sucessGoogleResponse}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              </div>

              <Link
                to="/register"
                className="font-Avenir text-sm text-center hover:no-underline"
              >
                Create account
              </Link>
            </Stack>
            <Stack>
              <button onClick={handleLoginAdmin} className="font-Avenir font-bold pt-5 text-md" style={{letterSpacing:"2px"}}> Continue as Admin</button>
              <FontAwesomeIcon icon={faUserShield} />
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <Img2
        className="relative ml-20 imgRight"
        src={rightLogin}
        alt=""
        height={550}
        width={500}
      />
    </Flex>
  );
}

const Img = styled.img`
  height: 500px;
  width: 500px;

  @media screen and (max-width: 1875px) {
    height: 400px;
    width: 400px;
  }

  @media screen and (max-width: 1725px) {
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 1600px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (max-width: 1450px) {
    height: 250px;
    width: 250px;
    margin-right: 0px;
  }

  @media screen and (max-width: 1280px) {
    height: 200px;
    width: 200px;
    margin-top: 100px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const Img2 = styled.img`
  height: 500px;
  width: 500px;

  @media screen and (max-width: 1875px) {
    height: 400px;
    width: 400px;
  }

  @media screen and (max-width: 1725px) {
    height: 350px;
    width: 350px;
  }

  @media screen and (max-width: 1600px) {
    height: 300px;
    width: 300px;
  }

  @media screen and (max-width: 1450px) {
    height: 250px;
    width: 250px;
    margin-left: 0px;
  }

  @media screen and (max-width: 1280px) {
    height: 200px;
    width: 200px;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

export default LoginForm;
