const userRouter = require(`./index`);
const { User } = require("../db/models/index");

userRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    console.log("**Made it to users api!**");
    res.send(users);
  } catch (err) {
    next(err);
  }
});

module.exports = userRouter;
