const jwt = require("jsonwebtoken");

const generateToken = {
    generate: (data) => {
        return jwt.sign({ data }, process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24,
        });
    },
    verify: (token) => {
        return new Promise((resolve, reject) => {
            return jwt.verify(token, process.env.JWT_SECRET, function(err, decoded){
                if (err) return reject(err);
                resolve(decoded);
            });
        });
    },
};

module.exports = generateToken;
