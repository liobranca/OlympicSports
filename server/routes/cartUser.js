const express = require("express");
const { cartUserUpdate, cartUserGet } = require("../controllers/cartUserController");
const { validateAuth } = require("../middleware/auth");
const router = express.Router();

router.put("/", validateAuth , cartUserUpdate);

router.get("/getCart", validateAuth, cartUserGet)

module.exports = router;
