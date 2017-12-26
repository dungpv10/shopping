const router = require("express").Router();

const productRouter = require("./product");
const categoryRouter = require("./category");

router.use("/product", productRouter);
router.use("/category", categoryRouter);

module.exports = router;
