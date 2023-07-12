const express = require('express');
const router = express.Router(); 
const authController = require("../controller/authController");


// Get Page

router.get("/login",authController.getPageLoginController);
router.get("/add-user",authController.getPageAddUserController);
router.get('/logout' , authController.logoutController);


  
// Action
router.post("/add-user" ,authController.addUserController);
router.post('/login' , authController.loginController);

module.exports = router