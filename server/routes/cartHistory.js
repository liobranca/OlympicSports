const express = require("express");
const { getAllCartHistory, createCartHistory } = require("../controllers/cartHistoryController");
const { validateAuth } = require("../middleware/auth");
const cartHistory = express.Router();


cartHistory.get("/",validateAuth, getAllCartHistory);
cartHistory.post("/agregarAHistorial",validateAuth, createCartHistory);
module.exports = cartHistory;
