const Router = require("express");
const router = new Router();
const ttnRouter = require("./ttnRouter");
const cityRouter = require("./cityRouter");
const warhouseRouter = require("./warhouseRouter");
const userRouter = require("./userRouter");

router.use("/ttn", ttnRouter);
router.use("/city", cityRouter);
router.use("/warhouse", warhouseRouter);
router.use("/user", userRouter);

module.exports = router;
