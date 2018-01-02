const router = require("express").Router();

const productRouter = require("./product");
const categoryRouter = require("./category");
const bannerRouter = require("./banner");
const contactRouter = require("./contact");

router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/banner", bannerRouter);
router.use("/contact", contactRouter);

module.exports = router;
