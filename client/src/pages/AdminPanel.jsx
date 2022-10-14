import React from "react";
import Navbar from "../common/Navbar";
import AdminPanelDetails from "../components/AdminPanel/AdminPanelDetails";
import Footer from "../components/Footer/Footer";

const AdminPanel = () => {
  return (
    <>
      <Navbar />
      <AdminPanelDetails />
      <Footer />
    </>
  );
};
export default AdminPanel;
