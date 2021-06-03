const controller = require('../controllers/sloganController');

module.exports = (router) => {
    router.post("/",
        controller.slogan);
}