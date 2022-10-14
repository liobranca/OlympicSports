const express = require("express");
const products = express.Router();

const {
  createProduct,
  getProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  getProducts,
  getProductSearch,
} = require("../controllers/productsController");

products.post("/createProduct", createProduct);

products.get("/getProduct", getProduct);

products.get("/getAllProducts", getAllProducts);

products.put("/updateProduct/:id", updateProduct);

products.delete("/deleteProduct/:id", deleteProduct);

products.get("/getProducts", getProducts);

products.get("/getProduct/:search", getProductSearch);

module.exports = products;
