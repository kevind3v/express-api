module.exports.mapSlogan = (data) => {
    let words = data.split(" ");
    let letterReverse = data.split("").reverse();
    let count = 0;
    let reverse = "";

    for (let i = 0; i < letterReverse.length; i++) {
        var letter = letterReverse[i];
        if (letter != " ") count++;
        reverse += letter;
    }

    return {
        "slogan": data,
        "words": words.length,
        "letter": {
            "withSpace": letterReverse.includes(" ") ? letterReverse.length : "Não possui espaço",
            "noSpace": count
        },
        "reverse": reverse
    }
}