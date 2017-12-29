const router = require("express").Router();
const bannerController = require("../../../app/controllers/banner");

router.get("/for-home-page", bannerController.index);

module.exports = router;
