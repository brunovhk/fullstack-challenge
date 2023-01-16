const router = require("express").Router();
const ApiController = require("../controllers/ApiController");

router.get("/search/:search", ApiController.search);

module.exports = router;
