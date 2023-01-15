const router = require("express").Router();

const ClienteController = require('../controllers/ClienteController')

router.post("/register", ClienteController.register);

module.exports = router;
