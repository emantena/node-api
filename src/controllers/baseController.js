const response = {
    success,
    data,
    message
};
//TODO criar retorno generico para response
exports.SendResponse = () => {
    switch (response.success) {
        case false:
            res.status(400).send({
                success: this.success,
                message: this.message
            });
            break;
        case true:
            res.status(200).send({
                success: this.success,
                data: this.data
            })
            break;
    }
}