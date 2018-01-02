
const router = require("express").Router();

const productController = require("../../../app/controllers/product");

router.get("/get-products-for-home-page", productController.getProductForHomePage);
router.get("/create", productController.create);
router.get("/recommended", productController.getRecommendedProduct);
router.get("/navigation/home-page", productController.getNavigationProducts);
router.get("/get-cart", productController.getCart);
router.get("/add-product-to-cart", productController.addProductToCart);
module.exports = router;
