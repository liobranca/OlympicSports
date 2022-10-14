const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const productsRouter = require("./products");
const cartUserRouter = require("./cartUser");
const cartItemRouter = require("./cartItem");
const cartHistoryRouter = require("./cartHistory");
const checkoutRouter = require("./checkout")

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/cartItem", cartItemRouter);
router.use("/cartUser", cartUserRouter);
router.use("/cartHistory", cartHistoryRouter);
router.use("/checkout", checkoutRouter);

module.exports = router;
