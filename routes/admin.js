const express = require("express");
const router = express.Router();
const Plan = require("../models/Plan");

// ADMIN: list all plans
router.get("/plans", async (req, res) => {
    const plans = await Plan.findAll();
    res.render("admin/plans/index", { plans });
});

// ADMIN: show new form
router.get("/plans/new", (req, res) => {
    res.render("admin/plans/new");
});

// ADMIN: create plan
router.post("/plans/new", async (req, res) => {
    await Plan.create(req.body);
    res.redirect("/admin/plans");
});

// ADMIN: edit form
router.get("/plans/edit/:id", async (req, res) => {
    const plan = await Plan.findByPk(req.params.id);
    res.render("admin/plans/edit", { plan });
});

// ADMIN: update plan
router.post("/plans/edit/:id", async (req, res) => {
    await Plan.update(req.body, { where: { id: req.params.id } });
    res.redirect("/admin/plans");
});

// ADMIN: delete plan
router.post("/plans/delete/:id", async (req, res) => {
    await Plan.destroy({ where: { id: req.params.id } });
    res.redirect("/admin/plans");
});

module.exports = router;
