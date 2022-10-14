import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editProduct } from "../../../state/admin";
import { getAllProducts } from "../../../state/products";

const ModalForm = ({ producto, setShowModal, setProducts }) => {

  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const edit = await dispatch(editProduct({producto,data}))
    const getall = await dispatch(getAllProducts(setProducts))
    const close = await setShowModal(false)
  };

  return (
    <div className="relative p-6 flex-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder={producto.name}
            name="name"
            {...register("name", { required: true })}
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500">* Name field cant be empty </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
            color
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="color"
            type="text"
            placeholder={producto.color}
            {...register("color", { required: true })}
          />
          {errors.color?.type === "required" && (
            <span className="text-red-500">* Color field cant be empty </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="size">
            Size
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="size"
            type="text"
            placeholder={producto.size}
            {...register("size", { required: true })}
          />
          {errors.size?.type === "required" && (
            <span className="text-red-500">* Size field cant be empty </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
            Brand
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="brand"
            type="text"
            placeholder={producto.brand}
            {...register("brand", { required: true })}
          />
          {errors.brand?.type === "required" && (
            <span className="text-red-500">* Brand field cant be empty </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder={producto.price}
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && (
            <span className="text-red-500">* Price field cant be empty </span>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
            Stock
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="stock"
            type="number"
            placeholder={producto.stock}
            {...register("stock", { required: true })}
          />
          {errors.stock?.type === "required" && (
            <span className="text-red-500">* Stock field cant be empty </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="categoria"
          >
            Categoria
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="categoria"
            type="text"
            placeholder={producto.categoria}
            {...register("categoria", { required: true })}
          />

          {errors.categoria?.type === "required" && (
            <span className="text-red-500">
              * Categoria field cant be empty{" "}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            type="text"
            placeholder={producto.description}
            {...register("description", { required: true })}
          />{" "}
          {errors.description?.type === "required" && (
            <span className="text-red-500">
              * Description field cant be empty{" "}
            </span>
          )}
        </div>

        <button onSubmit={onSubmit} className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ModalForm;
