const bcrypt = require('bcrypt');
const User = require('../model/userModel')

const { loginRequest } = require('../controllers/loginController/request/login.schema');
const jwtService = require('./jwtService');

exports.login = async (req) => {
    let validate = loginRequest.validate(req);

    if (validate.error) {
        return response = {
            success: false,
            message: validate.error.details[0].message
        }
    }

    let email = req.login;
    let password = req.password;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return response = {
            success: false,
            message: 'login ou senha inválidos'
        }
    }

    const pass_ok = await bcrypt.compare(password, user.password);

    if (!pass_ok) {
        return response = { 
            success: false,
            message: 'login ou senha inválidos'
        };
    }

    user.password = undefined;
    return response = {
        success: true,
        user,
        token: jwtService.createJWT(user.id)
    };
}