const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/db");

const Feedback = sequelize.define("Feedback", {
    rating: { type: DataTypes.INTEGER, allowNull: false },
    purchaseType: { type: DataTypes.STRING, allowNull: false },
    positive: { type: DataTypes.TEXT, allowNull: false },
    improvement: { type: DataTypes.TEXT, allowNull: false },
    recommend: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING }
}, {
    tableName: "feedback",
    timestamps: false
});

module.exports = Feedback;
