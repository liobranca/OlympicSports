import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../../common/Navbar";
import Footer from "../../Footer/Footer";
import ItemUser from "./ItemUser";

const UsersPanel = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("/api/users").then((users) => setUsuarios(users.data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="overflow-x-auto">
        <div className="min-w-screen min-h-screen flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
          <div className="w-full lg:w-5/6">
            <div className="bg-white shadow-md rounded my-6">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">ID</th>
                    <th className="py-3 px-6 text-left">NOMBRE</th>
                    <th className="py-3 px-6 text-center">EMAIL</th>
                    <th className="py-3 px-6 text-center">ADMIN</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                {usuarios.map((usuario, i) => (
                  <ItemUser
                    key={i}
                    usuario={usuario}
                    setUsuarios={setUsuarios}
                  />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UsersPanel;
