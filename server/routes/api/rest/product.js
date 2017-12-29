
const router = require("express").Router();

const productController = require("../../../app/controllers/product");

router.get("/get-products-for-home-page", productController.getProductForHomePage);
router.get("/create", productController.create);
router.get("/recommended", productController.getRecommendedProduct);
module.exports = router;
