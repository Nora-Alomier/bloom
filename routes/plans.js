const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");

// Display all plans
router.get("/", async (req, res) => {
    try {
        const plans = await Plan.findAll();
        res.render("plans/index", { plans });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading plans");
    }
});

// Show add new plan form
router.get("/new", (req, res) => {
    res.render("plans/new");
});

// Create new plan
router.post("/new", async (req, res) => {
    try {
        await Plan.create(req.body);
        res.redirect("/plans");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating plan");
    }
});

// Show edit form
router.get("/edit/:id", async (req, res) => {
    const plan = await Plan.findByPk(req.params.id);
    res.render("plans/edit", { plan });
});

// Update plan
router.post("/edit/:id", async (req, res) => {
    try {
        await Plan.update(req.body, { where: { id: req.params.id } });
        res.redirect("/plans");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating plan");
    }
});

// Delete plan
router.post("/delete/:id", async (req, res) => {
    try {
        await Plan.destroy({ where: { id: req.params.id } });
        res.redirect("/plans");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting plan");
    }
});

module.exports = router;
