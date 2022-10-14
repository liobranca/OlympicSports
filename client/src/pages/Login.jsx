import React from 'react'
import Navbar from '../common/Navbar'
import LoginForm from '../components/Login/LoginForm'
import BarDivider from "../common/BarDivider";

function Login() {
  return (
    <>
      <Navbar/>
      <LoginForm/>
      <BarDivider/>
    </>
  )
}

export default Login