const express = require("express");
const router = express.Router();
const cartModel = require("../models/cartModel");

// =========================
//       VIEW CART
// =========================
router.get("/", async (req, res) => {
    try {
        const cart = await cartModel.getCart();

        const subtotal = cart.reduce(
            (sum, item) => sum + (item.price * item.quantity),
            0
        );

        const delivery = subtotal > 0 ? 15 : 0;
        const tax = subtotal * 0.15;
        const total = subtotal + delivery + tax;

        res.render("cart/cart", {
            cart,
            totals: { subtotal, delivery, tax, total }
        });

    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading cart");
    }
});

// =========================
//     UPDATE QUANTITY
// =========================
router.post("/update-product/:productId", async (req, res) => {
    try {
        let qty = req.body.quantity || req.body.qty;
        qty = Number(qty);

        if (qty <= 0) qty = 1;

        await cartModel.update(req.params.productId, qty);
        res.redirect("/cart");

    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating cart");
    }
});

// =========================
//      REMOVE ITEM
// =========================
router.post("/remove-product/:productId", async (req, res) => {
    try {
        await cartModel.remove(req.params.productId);
        res.redirect("/cart");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error removing item");
    }
});

// =========================
//      CLEAR CART
// =========================
router.post("/clear", async (req, res) => {
    try {
        await cartModel.clear();
        res.redirect("/cart");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error clearing cart");
    }
});

module.exports = router;
