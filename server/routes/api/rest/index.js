const router = require("express").Router();

const productRouter = require("./product");
const categoryRouter = require("./category");
const bannerRouter = require("./banner");

router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/banner", bannerRouter);

module.exports = router;
