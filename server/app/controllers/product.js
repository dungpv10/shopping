const productController = {
    create: (req, res) => {
        const data = {
            product_name: "dungpv",
            category_name: "Đồ chơi trí tuệ",
        };
        res.json(data);
    },
};

module.exports = productController;
