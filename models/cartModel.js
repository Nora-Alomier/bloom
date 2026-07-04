const CartItem = require("./CartItem");
const Product = require("./Product");

module.exports = {

    async getCart() {
        const items = await CartItem.findAll({
            include: Product
        });

        return items.map(row => ({
            cart_id: row.id,
            product_id: row.product_id,
            quantity: row.quantity,
            title: row.Product.name,
            image: row.Product.image,
            price: row.Product.price
        }));
    },

    async add(productId, qty = 1) {

        const item = await CartItem.findOne({ where: { product_id: productId } });

        if (item) {
            return item.update({ quantity: item.quantity + qty });
        }

        return CartItem.create({ product_id: productId, quantity: qty });
    },

    async update(productId, qty) {
        return CartItem.update(
            { quantity: qty },
            { where: { product_id: productId } }
        );
    },

    async remove(productId) {
        return CartItem.destroy({ where: { product_id: productId } });
    },

    async clear() {
        return CartItem.destroy({ where: {} });
    }
};
