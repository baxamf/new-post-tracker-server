const Router = require("express");
const router = new Router();
const ttnController = require("../controllers/ttnController");

router.post("/", ttnController.addTtn);
router.get("/", ttnController.getTtn);
router.delete("/", ttnController.deleteTtn);

module.exports = router;
