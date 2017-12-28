const router = require("express").Router();
const bannerController = require("../../../app/controllers/banner");

router.get("/", bannerController.index);

module.exports = router;
