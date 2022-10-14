import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useInput } from "../../hooks/useInput";

import { Flex, Box, FormControl, FormLabel, Input, Stack, HStack, Select } from "@chakra-ui/react";
import aside from "../../assets/videos/profile.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons"
import "./Btn.css"

import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../state/auth";

import axios from "axios";
import styled from "styled-components";
import { changeProfile } from "../../state/user";

export default function ProfileForm() {

  const name = useInput("name");
  const lastname = useInput("lastname");
  const state = useInput("state");
  const city = useInput("city");
  const address = useInput("address");
  const zip = useInput("zip");
  const phone = useInput("phone");

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth)

  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeProfile({name,lastname,state,city,address,zip,phone}))
    navigate("/")
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

  useEffect(() => {
    dispatch(getProfile())
  },[])

  // trailer sound toggle
  const [toggleMute, setToggleMute] = useState(true);

  const handleMute = (e) => {
    e.preventDefault();
    setToggleMute(!toggleMute);
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
      <Stack spacing={8} className="lg:w-[550px] mx-20" py={12} px={6} as={'form'} onSubmit={handleSubmit}>
        <Stack align={"center"}>
          <h1 className="font-Avenir text-4xl">
            Edit Profile
          </h1>
        </Stack>
        <Box p={8}>
          <Stack spacing={4}>

            <HStack>
              <Box w='full'>
                <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >NAME</span></FormLabel>
                  <Input placeholder={user.name} borderColor='black' focusBorderColor="black" type="text" {...name}/>
                </FormControl>
              </Box>

              <Box w='full'>
                <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >LASTNAME</span></FormLabel>
                  <Input placeholder={user.lastname} borderColor='black' focusBorderColor="black" type="text" {...lastname}/>
                </FormControl>
              </Box>
            </HStack>

            <HStack>
              <Box minW='150px' maxW='150px'>
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

              <Box minW='80px'>
                <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >ZIP</span></FormLabel>
                  <Input placeholder={user.zip} borderColor='black' focusBorderColor="black" type="text" {...zip}/>
                </FormControl>
              </Box>
            </HStack>

            <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >ADRESS</span></FormLabel>
                  <Input placeholder={user.address} borderColor='black' focusBorderColor="black" type="tel" {...address}/>
            </FormControl>

            <FormControl>
                  <FormLabel className="font-Avenir"><span className="text-xs" style={{letterSpacing:"2px"}} >PHONE</span></FormLabel>
                  <Input placeholder={user.phone} borderColor='black' focusBorderColor="black" type="tel" {...phone}/>
            </FormControl>
            

            <Stack spacing={10}>
              <button className="font-Avenir font-bold pt-5 text-md" style={{letterSpacing:"2px"}} onClick={handleSubmit} >Apply Changes</button>
              <Link to="/forgotpassword" className="font-Avenir text-sm text-center hover:no-underline">Forgot password?</Link>
              <Link to="/" className="font-Avenir text-sm text-center hover:no-underline">Back to Home</Link>
            </Stack>
          
          </Stack>
        </Box>
      </Stack>
      </Flex>
      <Flex flex={1}>
        <Trailer
          src={aside}
          autoPlay
          muted={toggleMute}
          loop
          className="trailer"
        />
        {toggleMute ? (
          <button className="relative upBtn text-white" onClick={handleMute}><FontAwesomeIcon className="relative" icon={faVolumeMute}></FontAwesomeIcon></button>
        ) : (
            <button className="relative upBtn text-white" onClick={handleMute}><FontAwesomeIcon className="relative" icon={faVolumeHigh}></FontAwesomeIcon></button>
        )}
      </Flex>
    </Stack>
  );
}

const Trailer = styled.video`
  height: 100%;
  width: 48.5vw;
  position: absolute;
  object-fit: cover;
  margin-top: 0;

  @media screen and (max-width: 2400px) {
    width: 48.3vw;
  }

  @media screen and (max-width: 2089px) {
    width: 48.2vw;
  }

  @media screen and (max-width: 1973px) {
    width: 48vw;
  }

  @media screen and (max-width: 1776px) {
    width: 47.8vw;
  }

  @media screen and (max-width: 1614px) {
    width: 47.6vw;
  }

  @media screen and (max-width: 1494px) {
    width: 47.3vw;
  }

  @media screen and (max-width: 1485px) {
    width: 46.5vw;
  }


  @media screen and (max-width: 1462px) {
    width: 45.5vw;
  }

  @media screen and (max-width: 1435px) {
    width: 45vw;
  }

  @media screen and (max-width: 1422px) {
    width: 44.5vw;
  }

  @media screen and (max-width: 1410px) {
    width: 44vw;
  }

  @media screen and (max-width: 1396px) {
    width: 43.5vw;
  }

  @media screen and (max-width: 1384px) {
    width: 43vw;
  }

  @media screen and (max-width: 1372px) {
    width: 42.5vw;
  }

  @media screen and (max-width: 1360px) {
    width: 42vw;
  }

  @media screen and (max-width: 1348px) {
    width: 41vw;
  }

  @media screen and (max-width: 1326px) {
    width: 40vw;
  }

  @media screen and (max-width: 1305px) {
    width: 39vw;
  }

  @media screen and (max-width: 1282px) {
    width: 38vw;
  }

  @media screen and (max-width: 1261px) {
    width: 37vw;
  }

  @media screen and (max-width: 1242px) {
    width: 36vw;
  }

  @media screen and (max-width: 1222px) {
    width: 35vw;
  }

  @media screen and (max-width: 1203px) {
    width: 34vw;
  }

  @media screen and (max-width: 1185px) {
    width: 33vw;
  }

  @media screen and (max-width: 1167px) {
    width: 32vw;
  }

  @media screen and (max-width: 1150px) {
    width: 31vw;
  }

  @media screen and (max-width: 1134px) {
    width: 30vw;
  }

  @media screen and (max-width: 1117px) {
    width: 29vw;
  }

  @media screen and (max-width: 1101px) {
    width: 28vw;
  }

  @media screen and (max-width: 1086px) {
    width: 27vw;
  }

  @media screen and (max-width: 1071px) {
    width: 26vw;
  }

  @media screen and (max-width: 1057px) {
    width: 25vw;
  }

  @media screen and (max-width: 1044px) {
    width: 24vw;
  }

  @media screen and (max-width: 1030px) {
    width: 23.5vw;
  }

  @media screen and (max-width: 1024px) {
    width: 27.5vw;
  }

  @media screen and (max-width: 1020px) {
    width: 27vw;
  }

  @media screen and (max-width: 1014px) {
    width: 26vw;
  }

  @media screen and (max-width: 1000px) {
    width: 25vw;
  }

  @media screen and (max-width: 987px) {
    width: 24vw;
  }

  @media screen and (max-width: 975px) {
    width: 23vw;
  }

  @media screen and (max-width: 963px) {
    width: 22vw;
  }

  @media screen and (max-width: 950px) {
    width: 21vw;
  }

  @media screen and (max-width: 937px) {
    width: 20vw;
  }

  @media screen and (max-width: 925px) {
    width: 19vw;
  }

  @media screen and (max-width: 913px) {
    width: 18vw;
  }

  @media screen and (max-width: 903px) {
    width: 17vw;
  }

  @media screen and (max-width: 891px) {
    width: 16vw;
  }

  @media screen and (max-width: 882px) {
    width: 15vw;
  }

  @media screen and (max-width: 871px) {
    width: 14vw;
  }

  @media screen and (max-width: 861px) {
    width: 13vw;
  }

  @media screen and (max-width: 852px) {
    width: 12vw;
  }

  @media screen and (max-width: 841px) {
    width: 11vw;
  }

  @media screen and (max-width: 832px) {
    width: 10vw;
  }

  @media screen and (max-width: 822px) {
    width: 9vw;
  }

  @media screen and (max-width: 814px) {
    width: 8vw;
  }

  @media screen and (max-width: 805px) {
    width: 7vw;
  }

  @media screen and (max-width: 796px) {
    width: 6vw;
  }

  @media screen and (max-width: 789px) {
    width: 5vw;
  }

  @media screen and (max-width: 780px) {
    width: 4vw;
  }

  @media screen and (max-width: 771px) {
    width: 3vw;
  }


  @media screen and (max-width: 768px) {
    margin-top: -15vh;
    height: 29.8vh;
    width: 100%;
  }
  
`;

