import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

import styled from "styled-components";
import leftRegister from "../../assets/images/register/leftRegister1.png"
import rightRegister from "../../assets/images/register/rightRegister2.png"

import { log, success, error } from "../../utils/logs"
import { useInput } from "../../hooks/useInput";

import { Flex, Box, FormControl, FormLabel, Input, Stack, HStack, Select } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { registerRequest } from "../../state/auth";
import axios from "axios";


function RegisterForm() {

  const name = useInput("name");
  const lastname = useInput("lastname");
  const email = useInput("email");
  const password = useInput("password");
  const state = useInput("state");
  const city = useInput("city");
  const address = useInput("address");
  const zip = useInput("zip");
  const phone = useInput("phone");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors },} = useForm();


  const handleRegister = (e) => {
    e.preventDefault()
    log("register attempt...")
    dispatch(registerRequest({name,lastname,email,password,state,city,address,zip,phone}))
    .then(() => {
      success(`new user registered`)
      navigate("/login")
    })
    .catch((res) => error(res.status, res.statusText))
  }

  const [states,setStates] = useState([]);
  const [cities,setCities] = useState([]);

  useEffect(() => {
    async function FetchStates () {
      try {
        const res = await axios.get("https://apis.datos.gob.ar/georef/api/provincias");
        setStates(res.data.provincias)
      }
      catch (err) {
        console.log(err)
      }
    }
    FetchStates()
  },[])

  useEffect(() => {
    async function FetchCities () {
      try {
        const res = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${state.value}&aplanar=true&max=5000&exacto=true`);
        setCities(res.data.municipios)
      }
      catch (err) {
        console.log(err)
      }
    }
    FetchCities()
  },[state.value])

  return (
    <Flex minH={"89vh"} align={"center"} justify={"center"} className="sm:flex-col xl:flex-row">
    <Img className="relative mr-20 imgLeft" src={leftRegister} alt="" height={500} width={500}/>
      <Stack spacing={8} className="lg:w-[550px] mx-20" py={12} px={6} as={'form'} onSubmit={handleRegister}>
        <Stack align={"center"}>
          <h1 className="font-Avenir text-4xl">
            Register
          </h1>
        </Stack>
        <Box p={8}>
          <Stack spacing={4}>

            <HStack>
              <Box w='full'>
                <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >NAME</span></FormLabel>
                  <Input borderColor='black' focusBorderColor="black" type="text" {...name}/>
                </FormControl>
              </Box>

              <Box w='full'>
                <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >LASTNAME</span></FormLabel>
                  <Input borderColor='black' focusBorderColor="black" type="text" {...lastname}/>
                </FormControl>
              </Box>
            </HStack>

            <FormControl>
              <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >EMAIL</span></FormLabel>
              <Input borderColor='black' focusBorderColor="black" type="email" {...email}/>
            </FormControl>

            <FormControl>
              <div>
                <FormLabel className="font-Avenir"><span className="text-xs float-left mb-1" style={{letterSpacing:"2px"}}>PASSWORD</span></FormLabel>
              </div>
              <Input borderColor='black' focusBorderColor="black" type="password" minWidth="350px" {...password} />
            </FormControl>

            <HStack>
              <Box maxW='150px'>
                <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >STATE</span></FormLabel>
                  <Select borderColor='black' focusBorderColor="black" placeholder='Select State' {...state}>
                    {states.map((state,i) => (
                      <option key={i} value={state.nombre}>{state.nombre}</option>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box minW='150px'>
                <FormControl>
                <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >CITY</span></FormLabel>
                  <Select  borderColor='black' focusBorderColor="black" placeholder='Select City' {...city}>
                    {cities.map((city,i) => (
                      <option key={i} value={city.nombre}>{city.nombre}</option>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >ZIP</span></FormLabel>
                  <Input borderColor='black' focusBorderColor="black" type="text" {...zip}/>
                </FormControl>
              </Box>
            </HStack>

            <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >ADRESS</span></FormLabel>
                  <Input borderColor='black' focusBorderColor="black" type="tel" {...address}/>
            </FormControl>

            <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >PHONE</span></FormLabel>
                  <Input borderColor='black' focusBorderColor="black" type="tel" {...phone}/>
            </FormControl>

            <Stack spacing={10}>
              <button className="font-Avenir font-bold pt-5 text-md" style={{letterSpacing:"2px"}}>REGISTER</button>
              <Link to="/login" className="font-Avenir text-sm text-center hover:no-underline">Back to Login</Link>
            </Stack>

            
          
          </Stack>
        </Box>
      </Stack>
      <Img2 className="relative ml-20 imgRight" src={rightRegister} alt="" height={550} width={500}/>
    </Flex>
  )
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
`

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
    display: none;
  }

  @media screen and (max-width: 640px) {
    display: none;
  }

`

export default RegisterForm