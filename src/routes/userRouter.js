const { login } = require("../authentication/authController.js");
const { verifyToken } = require("../authentication/token.js");
const { userPostController } = require("../controllers/userController.js");
const { userGetAllController } = require("../controllers/userController.js");
const { userGetByIdController } = require("../controllers/userController.js");
const { userUpdateController } = require("../controllers/userController.js");
const { userDeleteController } = require("../controllers/userController.js");


const userRouter = require("express").Router();

userRouter.post("/login", login);

userRouter.use(verifyToken)

userRouter.post("/create", userPostController);
userRouter.get("/getAll", userGetAllController);
userRouter.get("/:id", userGetByIdController)
userRouter.put("/update/:id", userUpdateController);
userRouter.delete("/delete/:id", userDeleteController);



module.exports = {
    userRouter
}