module.exports = (router) => {
    router.use((req, res, next) => {
        const err = new Error('Ops!! Não encontramos nada!!');
        err.statusCode = 404;
        next(err);
    });


    router.use((err, req, res, next) => {
        const status = err.statusCode || 422;

        var exception = {
            status: status,
            message: err.message,
        }

        res.status(status).json(exception);

        console.error({ err });
    });

}