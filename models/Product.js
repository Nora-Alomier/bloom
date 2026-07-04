const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/db");

const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.TEXT },
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    care: { type: DataTypes.TEXT },
    reviews_count: { type: DataTypes.INTEGER, defaultValue: 0 }
}, {
    tableName: "products",
    timestamps: false
});

module.exports = Product;
