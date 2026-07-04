const express = require("express");
const { Op } = require("sequelize");
const path = require("path");
require("dotenv").config();

const { sequelize } = require("./models/db");

// Sequelize Models
const Product = require("./models/Product");

// Routers
const adminRoutes = require("./routes/admin");
const plansRoutes = require("./routes/plans");
const cartRoutes = require("./routes/cart");
const productCartRoutes = require("./routes/productCart");
const feedbackRoutes = require("./routes/feedback");

const app = express();

// =========================
//    MIDDLEWARE
// =========================

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// =========================
//       MAIN ROUTES
// =========================

app.get("/", (req, res) => res.render("index"));

// Static pages
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/login", (req, res) => res.render("login"));
app.get("/register", (req, res) => res.render("register"));
app.get("/profile", (req, res) => res.render("profile"));
app.get("/wishlist", (req, res) => res.render("wishlist"));
app.get("/checkout", (req, res) => res.render("checkout"));


// =========================
//        SHOP ROUTES
// =========================

app.get("/shop", async (req, res) => {
    try {
        const products = await Product.findAll();
        res.render("shop/index", { products });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading products");
    }
});

// Product Details
app.get("/shop/product/:id", async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);

        if (!product) {
            return res.send("Product not found");
        }

        res.render("shop/product", { product });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading product");
    }
});

app.get("/search-demo", (req, res) => {
    res.render("search-demo");
});


// =========================
//       ADMIN ROUTE FIX
// =========================

// Redirect /admin → /admin/plans
app.get("/admin", (req, res) => {
    res.redirect("/admin/plans");
});

app.use("/admin", adminRoutes);


// =========================
//          ROUTERS
// =========================

app.use("/plans", plansRoutes);
app.use("/cart", cartRoutes);
app.use("/cart", productCartRoutes);
app.use("/feedback", feedbackRoutes);


// =========================
//     SYNC + START SERVER
// =========================

sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Sequelize synchronized successfully.");
        app.listen(3000, () => {
            console.log("Server running at http://localhost:3000");
        });
    })
    .catch((err) => {
        console.error("Sequelize sync error:", err);
    });
