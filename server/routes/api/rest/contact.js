const router = require("express").Router();
const authMiddleware = require("../../../app/middlewares/auth");
const contactController = require("../../../app/controllers/contact");

router.post("/send", authMiddleware.authenticated(), contactController.sendContact);

module.exports = router;
