const express = require("express");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");
const { getCheckout, deleteCheckout } = require("../controllers/checkoutController");

router.get("/", validateAuth, getCheckout);

router.delete("/", validateAuth, deleteCheckout)


module.exports = router;
