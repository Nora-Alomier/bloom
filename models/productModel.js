const Product = require("./Product");

module.exports = {

    getAll() {
        return Product.findAll();
    },

    getById(id) {
        return Product.findByPk(id);
    },

    create(data) {
        return Product.create(data);
    },

    update(id, data) {
        return Product.update(data, { where: { id } });
    },

    delete(id) {
        return Product.destroy({ where: { id } });
    }
};
