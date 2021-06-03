const resource = require('../resources/sloganResource');

module.exports.processSlogan = (data) => {
    const slogan = data.slogan.trim();

    if (!slogan)
        throw new Error("Frase não encontrada!!");
    if (typeof slogan != "string" || slogan.length == 0)
        throw new Error("Frase invalida!!");

    return resource.mapSlogan(slogan);
}