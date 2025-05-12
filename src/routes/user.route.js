const route = require("express").Router();
const userController = require("../controllers/user.controller.js");
const auth = require("../middleware/auth.js");

route.post("/login", userController.login);
route.post("/register", userController.register);
route.post("/logout", auth.verifyJWT, userController.logout);
route.get("/myProfile", auth.verifyJWT, userController.getMyProfile);

module.exports = route;