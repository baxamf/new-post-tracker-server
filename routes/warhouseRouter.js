const Router = require("express");
const router = new Router();
const warhouseController = require("../controllers/warhouseController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/", warhouseController.addWarhouse);
router.get("/", authMiddleware, warhouseController.getWarhouse);

module.exports = router;
