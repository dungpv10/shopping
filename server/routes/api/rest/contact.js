const router = require("express").Router();
const contactController = require("../../../app/controllers/contact");

router.post("/send", contactController.sendContact);

module.exports = router;
