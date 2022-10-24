const Router = require("express");
const userContoller = require("../controllers/userController");
const router = new Router();

router.post("/registration", userContoller.registration);
router.post("/login", userContoller.login);
router.post("/logout", userContoller.logout);
router.get("/refresh", userContoller.refresh);

module.exports = router;
