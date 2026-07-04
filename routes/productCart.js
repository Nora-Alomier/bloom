const express = require("express");
const router = express.Router();
const cartModel = require("../models/cartModel");

// Add product from shop/product
router.post("/add-product/:id", async (req, res) => {
    const productId = req.params.id;
    const qty = Number(req.body.qty) || 1;

    await cartModel.add(productId, qty);

    res.redirect("/cart");
});

// Add plan as product (if you use this)
router.post("/add/:id", async (req, res) => {
    await cartModel.add(req.params.id, 1);
    res.redirect("/cart");
});

module.exports = router;
