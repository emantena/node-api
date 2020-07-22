const joi = require('@hapi/joi');
const { join } = require('path');

//TODO verificar mensagens em pt-br
const schema = {
    loginRequest: joi.object({
        login: joi.string()
            .required(),
        password: joi.string()
            .required()
    })
};

module.exports = schema;