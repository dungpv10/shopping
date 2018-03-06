const JWTToken = require("../utils/token");
const jwt = require("jsonwebtoken");
const response = require("../consts/response");

const authMiddleware = {
    authenticated: () => {
        return (req, res, next) => {
            let token = req.headers["authorization"];

            if (!token) {
                return res.status(401).json({
                    code: response.error,
                    message: "You must be login first",
                });
            }

            token = token.replace("Bearer ", "");
            jwt.verify(token, process.env.JWT_SECRET, function(err, user) {
                if (err) {
                    return res.status(401).json({
                        code: response.error,
                        message: "Please register Log in using a valid email to submit posts",
                    });
                }
                req.user = user;
                next();
            });
        };
    },
};

module.exports = authMiddleware;
