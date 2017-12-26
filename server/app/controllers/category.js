const response = require("../consts/response");
const _ = require("lodash");

const categoryController = {
    index: (req, res) => {
        res.json({});
    },
    getCategoryForMenu: (req, res) => {
        res.json({
            code: response.success,
            message: "Get categories for menu successfully",
            categories: [
                {
                    slug: "do-choi-tre-em",
                    category_name: "Đồ chơi trẻ em",
                }, {
                    slug: "do-dung-hoc-sinh",
                    category_name: "Đồ dùng học sinh",
                }, {
                    slug: "thuc-pham-organic",
                    category_name: "Thực phẩm organic",
                },
            ],
        });
    },
    getCategoryForSidebar: (req, res) => {
        res.json({
            code: response.success,
            message: "Get categories for sidebar successfully",
            categories: [
                {
                    slug: "do-choi-tre-em",
                    category_name: "Đồ chơi trẻ em",
                    total_models: _.random(1, 10),
                    models: [
                        {
                            slug: "flash-card",
                            model_name: "Flashcard",
                            total_products: _.random(10, 100),
                        }, {
                            slug: "lego",
                            model_name: "Lego",
                            total_products: _.random(10, 100),
                        }, {
                            slug: "very-good",
                            model_name: "Very Good",
                            total_products: _.random(10, 100),
                        }, {
                            slug: "the-gioi-dat-nan",
                            model_name: "Thế giới đất nặn",
                            total_products: _.random(10, 100),
                        }, {
                            slug: "usa-store",
                            model_name: "USA Store",
                            total_products: _.random(10, 100),
                        },
                    ],

                }, {
                    slug: "thuc-pham-organic",
                    category_name: "Thực phẩm Organic",
                    total_models: _.random(1, 10),
                    models: [
                        {
                            slug: "dau-goi",
                            model_name: "Dầu gội",
                            total_products: _.random(10, 100),
                        }, {
                            slug: "duong-moi",
                            model_name: "Dưỡng môi",
                            total_products: _.random(10, 100),
                        }, {
                            slug: "banh",
                            model_name: "Bánh",
                            total_products: _.random(10, 100),
                        },
                    ],

                },
            ],
        });
    },
};

module.exports = categoryController;
