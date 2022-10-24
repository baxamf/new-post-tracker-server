const Router = require("express");
const cityController = require("../controllers/cityController");
const router = new Router();

router.post("/", cityController.addCity);
router.get("/", cityController.checkCity);
router.get("/:id", cityController.getCity);

module.exports = router;
