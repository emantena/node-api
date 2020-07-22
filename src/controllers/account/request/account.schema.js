const joi = require('@hapi/joi');
const { join } = require('path');

//TODO verificar mensagens em pt-br
const schema = {
    createUserRequest: joi.object({
        nome: joi.string()
            .required()
            .min(4)
            .max(100),
        email: joi.string()
            .required()
            .email(),
        password: joi.string()
            .required()
    }),
    changePasswordRequest: joi.object({
        oldPassword: joi.string()
            .required(),
        newPassword: joi.string()
            .required(),
        confirmPassword: joi.ref('newPassword')
    })
};

module.exports = schema;