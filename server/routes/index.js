const Router = require("express");
const router = new Router();

const deviceRouter = require("./userRouter");
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const typeRouter = require("./typeRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/deice", deviceRouter);

module.exports = router; 
