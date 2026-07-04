const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/db");

const Plan = sequelize.define("Plan", {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: true },
    features: { type: DataTypes.TEXT, allowNull: true }
}, {
    tableName: "plans",
    timestamps: false
});

module.exports = Plan;
