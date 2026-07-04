const { DataTypes } = require("sequelize");
const { sequelize } = require("../models/db");
const Product = require("./Product");

const CartItem = sequelize.define("CartItem", {
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    tableName: "product_cart_items",
    timestamps: false
});

CartItem.belongsTo(Product, { foreignKey: "product_id" });

module.exports = CartItem;
