import React from "react";
import { useDispatch } from "react-redux";

import { getAllProducts } from "../../../state/products";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { deleteProduct } from "../../../state/admin";

const ProductsItem = ({ producto, setProducts }) => {
  const [showModal, setShowModal] = React.useState(false);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    const deleteP = await dispatch(deleteProduct(producto));
    const getall = await dispatch(getAllProducts(setProducts));
  };

  return (
    <>
      <tbody className="text-gray-600 text-sm font-light">
        <tr className="border-b border-gray-200 hover:bg-gray-100">
          <td className="py-3 px-6 text-left whitespace-nowrap">
            <div className="flex items-center">
              <div className="mr-2"></div>
              <span className="font-medium">{producto.id}</span>
            </div>
          </td>
          <td className="py-3 px-6 text-left">
            <div className="flex items-center">
              <div className="mr-2 text-xl"> {producto.name} </div>
              <span></span>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex items-center justify-center">
              <span className="text-xl">{producto.categoria}</span>
            </div>
          </td>
          <td className="py-3 px-6 text-center">
            <span className="rounded-full text-xl ">$ {producto.price}</span>
          </td>
          <td className="py-3 px-6 text-center">
            <div className="flex item-center justify-center">
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button onClick={() => setShowModal(true)}>
                  <FontAwesomeIcon icon={faPen} />
                </button>
              </div>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                <button onClick={handleDelete}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"></div>
            </div>
          </td>
        </tr>
      </tbody>

      {/* popUp */}
      {showModal ? (
        <Modal
          producto={producto}
          setShowModal={setShowModal}
          setProducts={setProducts}
        />
      ) : null}
    </>
  );
};

export default ProductsItem;
