import React from "react";
import Navbar from "../common/Navbar";
import BarDivider from "../common/BarDivider";
import Categories from "../components/Home/Categories/Categories";
import Collections from "../components/Home/Collections/Collections";
import PreInfo from "../components/Home/PreInfo/PreInfo";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
        <Navbar />
        <Collections/>
        <BarDivider/>
        <PreInfo/>
        <Categories/>
        <Testimonials/>
        <Footer/>
    </>
  );
}