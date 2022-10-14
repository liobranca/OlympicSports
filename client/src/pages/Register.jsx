import React from "react";
import Navbar from "../common/Navbar";
import RegisterForm from "../components/Register/RegisterForm";
import BarDivider from "../common/BarDivider";

function Register() {
  return (
    <>
      <Navbar />
      <RegisterForm/>
      <BarDivider />
    </>
  );
}

export default Register;
