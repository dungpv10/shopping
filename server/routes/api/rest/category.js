const router = require("express").Router();

const categoryController = require("../../../app/controllers/category");

router.get("/", categoryController.index);
router.get("/menu", categoryController.getCategoryForMenu);
router.get("/sidebar", categoryController.getCategoryForSidebar);

module.exports = router;
