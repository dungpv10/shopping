
const router = require("express").Router();

const productController = require("../../../app/controllers/product");

router.get("/", productController.index);
router.get("/create", productController.create);

module.exports = router;
