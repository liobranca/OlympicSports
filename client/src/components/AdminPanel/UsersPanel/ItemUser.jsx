import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const ItemUser = ({ usuario, setUsuarios }) => {
  const [adminChange, setAdminChange] = useState(usuario.admin);

  const handleAdmin = () => {
    async function fetchData() {
      const setAdmin = await axios.put(`/api/users/darNewAdmin/${usuario.id}`);
      setAdminChange(!adminChange);
    }
    fetchData();
  };

  const handleDelete = () => {
    async function fetchData() {
      const deleteUser = await axios.delete(
        `/api/users/deleteUser/${usuario.id}`
      );
      const delete1 = await axios
        .get("/api/users")
        .then((users) => setUsuarios(users.data));
    }
    fetchData();
  };

  return (
    <tbody className="text-gray-600 text-sm font-light">
      <tr className="border-b border-gray-200 hover:bg-gray-100">
        <td className="py-3 px-6 text-left whitespace-nowrap">
          <div className="flex items-center">
            <div className="mr-2">{/* { Aca va icono del usuario} */}</div>
            <span className="font-medium">{usuario.id}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-left">
          <div className="flex items-center">
            <div className="mr-2">
              <img
                className="w-6 h-6 rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
              />
            </div>
            <span>{usuario.name + " " + usuario.lastname}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex items-center justify-center">
            <span>{usuario.email}</span>
          </div>
        </td>
        <td className="py-3 px-6 text-center">
          {adminChange ? (
            <span className="bg-green-400 text-black-600 py-1 px-3 rounded-full text-xs">
              TRUE
            </span>
          ) : (
            <span className="bg-red-400 text-black-600 py-1 px-3 rounded-full text-xs">
              FALSE
            </span>
          )}
        </td>
        <td className="py-3 px-6 text-center">
          <div className="flex item-center justify-center">
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <button onClick={handleAdmin}>
                <FontAwesomeIcon icon={faUserShield} />
              </button>
            </div>
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
              <button onClick={handleDelete}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ItemUser;
