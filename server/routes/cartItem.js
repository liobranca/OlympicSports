const express = require("express");
const router = express.Router();


const { CreateCartItem, ModifyCartItem, DeleteCartItem, GetCartItem, GetCartItems } = require("../controllers/cartItemController");
const { validateAuth } = require("../middleware/auth");


router.post("/", CreateCartItem);

router.delete("/:id", DeleteCartItem);

router.put("/:id", ModifyCartItem);

router.get("/", validateAuth, GetCartItem)

router.get("/cartItems", validateAuth, GetCartItems)


module.exports = router;
