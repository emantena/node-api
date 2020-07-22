const loginService = require('../../services/loginService');

exports.post = async (req, res, next) => {
    try {
        let result = await loginService.login(req.body);
        
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
                    token: result.token,
                    user: result.user
                 });
                break;
        }

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'erro interno da aplicação'
         });
    }
}