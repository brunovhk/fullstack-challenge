const router = require("express").Router();
const ClienteController = require("../controllers/ClienteController");

router.post("/register", ClienteController.register);
router.get("/", ClienteController.getAll);
router.delete("/deleteAll", ClienteController.deleteAllData);


module.exports = router;
