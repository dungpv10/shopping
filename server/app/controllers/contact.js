const response = require("../consts/response");

const contactController = {
    sendContact: (req, res) => {
        res.json({
            code: response.success,
            message: "Send contact successfully",
            data: req.body,
        });
    },
};

module.exports = contactController;
