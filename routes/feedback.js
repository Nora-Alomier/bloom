const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const { Op } = require("sequelize");

// =========================
//       SHOW FEEDBACK
// =========================
router.get("/", async (req, res) => {
    try {
        const feedbackList = await Feedback.findAll();
        res.render("feedback", { feedbackList });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading feedback");
    }
});

// =========================
//      SUBMIT FEEDBACK
// =========================
router.post("/", async (req, res) => {
    try {
        await Feedback.create(req.body);
        res.redirect("/feedback");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error submitting feedback");
    }
});

// =========================
//      SEARCH FEEDBACK
// =========================
router.get("/search", async (req, res) => {
    const q = req.query.q;

    try {
        const feedbackList = await Feedback.findAll({
            where: {
                [Op.or]: [
                    { positive: { [Op.like]: `%${q}%` } },
                    { improvement: { [Op.like]: `%${q}%` } },
                    { purchaseType: { [Op.like]: `%${q}%` } }
                ]
            }
        });

        res.render("feedback", { feedbackList });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error searching feedback");
    }
});

// =========================
//       DELETE FEEDBACK
// =========================
router.post("/delete/:id", async (req, res) => {
    try {
        await Feedback.destroy({ where: { id: req.params.id } });
        res.redirect("/feedback");
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting feedback");
    }
});

module.exports = router;
