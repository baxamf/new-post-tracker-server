const Router = require("express");
const router = new Router();
const ttnController = require("../controllers/ttnController");

router.post("/", ttnController.checkTtn);
router.get("/", ttnController.getTtn);
router.delete("/", ttnController.deleteTtn);

module.exports = router;
