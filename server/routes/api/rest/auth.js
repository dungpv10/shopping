const router = require("express").Router();
const authController = require("../../../app/controllers/auth");

router.post("/login", authController.postLogin);

module.exports = router;
