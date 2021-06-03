const { processSlogan } = require('../services/sloganService');

module.exports = {
    slogan: (req, res) => {

        const reqSlogan = processSlogan(req.body);

        res.status(200).json({
            status: 'OK',
            message: 'Frase manipulada com sucesso!!',
            data: reqSlogan
        });
    }
}