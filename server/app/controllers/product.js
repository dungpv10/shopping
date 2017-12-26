const lodash = require("lodash");
const response = require("../consts/response");

const productController = {
    create: (req, res) => {
        const data = {
            code: response.success,
            message: "Create product successfully",
            product: {
                id: 1,
                product_name: "Product name",
                categoryId: 1,
            },
        };
        res.json(data);
    },

    index: (req, res) => {
        const products = [];
        const categories = ["category 1", "category 2", "category 3"];
        for (let i = 0; i < 10; i++) {
            products.push({
                product_name: `Product ${i}`,
                thumbnail_path: "http://localhost:3000/images/products/product4.jpg",
                category_name: categories[lodash.random(0, categories.length)],
            });
        }
        const data = {
            code: response.success,
            message: "Get list product successfully",
            products,
        };
        res.json(data);
    },
};

module.exports = productController;
