const lodash = require("lodash");
const response = require("../consts/response");
const slug = require("slug");
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

    getProductForHomePage: (req, res) => {
        const products = [];
        const categories = ["category 1", "category 2", "category 3"];
        const thumbnails = [
                            "http://localhost:3000/images/products/product1.jpg",
                            "http://localhost:3000/images/products/product2.jpg",
                            "http://localhost:3000/images/products/product3.jpg",
        ];
        for (let i = 0; i < 12; i++) {
            products.push({
                product_name: `Product ${i}`,
                slug: slug(`Product ${i}`),
                price: lodash.random(100, 1000),
                thumbnail_path: thumbnails[lodash.random(0, thumbnails.length)],
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

    getRecommendedProduct(req, res) {
        // get the products with sort views
        const thumbnails = [
            "http://localhost:3000/images/products/product1.jpg",
            "http://localhost:3000/images/products/product2.jpg",
            "http://localhost:3000/images/products/product3.jpg",
        ];
        const products = [];
        for (let i = 0; i < 12; i++) {
            products.push({
                product_name: `Product ${i}`,
                slug: slug(`Product ${i}`),
                price: lodash.random(100, 1000),
                thumbnail_path: thumbnails[lodash.random(0, thumbnails.length)],
            });
        }
        res.json({
            code: response.success,
            message: "get recommended products successfully",
            products,
        });
    },
};

module.exports = productController;
