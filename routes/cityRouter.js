const Router = require("express");
const cityController = require("../controllers/cityController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = new Router();

router.post("/", cityController.addCity);
router.get("/", authMiddleware, cityController.checkCity);
router.get("/:id", cityController.getCity);

module.exports = router;
