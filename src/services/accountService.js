const bcrypt = require('bcrypt');

const User = require('../model/userModel')
const { createUserRequest, changePasswordRequest } = require('../controllers/account/request/account.schema');

exports.createAccount = async (req) => {
    let validate = createUserRequest.validate(req);

    if (validate.error) {
        return response = {
            success: false,
            message: validate.error.details[0].message
        }
    }

    let emailExist = await emailExists(req.email);

    if (emailExist) {
        return response = {
            success: false,
            message: "email já cadastrado"
        };
    }

    let user = await User.create(req);
    user.password = undefined;

    return response = {
        success: true,
        user
    }
};

exports.changePassword = async (req, userId) => {
    let validate = changePasswordRequest.validate(req);

    if (validate.error) {
        return response = {
            success: false,
            message: validate.error.details[0].message
        }
    }

    let user = await getUser(userId);

    const pass_ok = await bcrypt.compare(req.oldPassword, user.password);

    if(!pass_ok){
        return response = {
            success: false,
            message: "Senha antiga não confere"
        }
    }

    user.password = await bcrypt.hash(req.newPassword, 10);

    let result = await User.update(user);
    // let filter = { _id: userId };
    // let update = { password: req.newPassword };

    // await User.findOneAndUpdate(filter, update);

    return response = {
        success: true,
    }
}

emailExists = async (email) => {
    let user = await User.findOne({ email });

    return user != null;
}

getUser = async (userId) => {
    let user = await User.findById(userId).select('+password');;

    return user;
}