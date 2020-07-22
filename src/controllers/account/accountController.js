const accountService = require('../../services/accountService');

exports.post = async (req, res, next) => {
    try {
        let result = await accountService.createAccount(req.body);

        switch (result.success) {
            case false:
                res.status(400).send({
                    success: result.success,
                    message: result.message
                });
                break;
            case true:
                res.status(200).send({
                    success: result.success,
                    user: result.user
                });
                break;
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'erro interno da aplicação'
        })   
    }
}

exports.changePassword = async(req, res, next) => {
    try {
        let result = await accountService.changePassword(req.body, req.decoded["id"]);

        switch (result.success) {
            case false:
                res.status(400).send({
                    success: result.success,
                    message: result.message
                });
                break;
            case true:
                res.status(200).send({
                    success: result.success,
                });
                break;
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'erro interno da aplicação'
        })   
    }
}