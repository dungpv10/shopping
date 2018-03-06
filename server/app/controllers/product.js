const lodash = require("lodash");
const response = require("../consts/response");
const slug = require("slug");
const localStorage = require("localStorage");

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
                            "http://localhost:3000/images/products/product2.jpg",
                            "http://localhost:3000/images/products/product3.jpg",
        ];
        for (let i = 1; i < 12; i++) {
            products.push({
                id: i,
                product_name: `Sản phẩm ${i}`,
                slug: slug(`Sản phẩm ${i}`),
                price: lodash.random(100, 1000),
                thumbnail_path: thumbnails[lodash.random(0, thumbnails.length - 1)],
                category_name: categories[lodash.random(0, categories.length - 1 )],
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
            "http://localhost:3000/images/products/product2.jpg",
            "http://localhost:3000/images/products/product3.jpg",
        ];
        const products = [];
        for (let i = 0; i < 12; i++) {
            products.push({
                id: i,
                product_name: `Sản phẩm đề xuất ${i}`,
                slug: slug(`Sản phẩm đề xuất ${i}`),
                price: lodash.random(100, 1000),
                thumbnail_path: thumbnails[lodash.random(0, thumbnails.length - 1)],
            });
        }
        res.json({
            code: response.success,
            message: "get recommended products successfully",
            products,
        });
    },

    getNavigationProducts(req, res) {
        const thumbnails = [
            "http://localhost:3000/images/products/product2.jpg",
            "http://localhost:3000/images/products/product3.jpg",
        ];
        const products = [];
        const categoryIds = [1, 2, 3];
        for (let i = 0; i < 8; i++) {
            products.push({
                id: i,
                product_name: `Sản phẩm navigation ${i}`,
                slug: slug(`Sản phẩm navigation ${i}`),
                price: lodash.random(100, 1000),
                category_id: categoryIds[lodash.random(0, categoryIds.length - 1)],
                thumbnail_path: thumbnails[lodash.random(0, thumbnails.length - 1)],
            });
        }

        const newProduct = lodash.filter(products, { "category_id": lodash.parseInt(req.query.category_id) });

        res.json({
            code: response.success,
            category_id: lodash.parseInt(req.query.category_id),
            products: newProduct,
            message: "get navigation products successfully",
        });
    },

    getCart(req, res) {
        const products = [];
        for (let i = 1; i < 5; i++){
            const totalRandom = lodash.random(1, 10);
            const unitPriceRandom = lodash.random(10, 100);
            const product = {
                id: i,
                product_name: `Product ${i} from cart`,
                total: totalRandom,
                unit_price: unitPriceRandom,
                total_price: totalRandom * unitPriceRandom,
                thumbnail_path: "http://localhost:3000/images/cart/one.jpg",
            };
            products.push(product);
        }
        res.json({
            code: 1,
            message: "get product from cart successfully",
            products,
        });
    },
    addProductToCart(req, res) {
        const productIds = localStorage.getItem("products_cart") || [];
        res.json({ productIds });
        productIds.push(req.query.product_id);
        localStorage.setItem("products_cart", JSON.stringify(productIds));

        res.json({
            code: 1,
            message: "add product to cart successfully",
        });
    },
};

module.exports = productController;
