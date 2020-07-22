const jwt = require('jsonwebtoken');

const config = require('../../bin/config');

exports.createJWT = (userId) => {
    return jwt.sign({ id: userId }, config.jwt_pass, { expiresIn: config.jwt_expires_in });
}