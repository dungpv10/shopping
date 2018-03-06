const response = require("../consts/response");
const JWTToken = require("../utils/token");

const user = {
    username: "dungpv",
    password: "25111990",
};

const authController = {
    postLogin: (req, res) => {
        const data = req.body;
        const token = JWTToken.generate(user);
        res.json({
            code: response.success,
            data,
            token,
        });
    },
};

module.exports = authController;
