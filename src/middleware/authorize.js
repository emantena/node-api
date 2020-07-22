const jwt = require("jsonwebtoken");
const config = require("../../bin/config")

module.exports = {
    defaultAuthorization: (req, res, next) => {
        let token = req.get("authorization");

        if (!token) {
            return res.json({
                success: false,
                message: "Acesso negado! Usuário não autorizado"
            });
        }

        // Remove Bearer from string
        token = token.slice(7);
        jwt.verify(token, config.jwt_pass, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: "Token inváido..."
                });
            }

            req.decoded = decoded;
            next();
        });
    }
};
