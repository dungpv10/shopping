
const router = require("express").Router();

const productController = require("../../../app/controllers/product");

router.get("/", productController.create);

module.exports = router;
