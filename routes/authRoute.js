const express = require('express');
const router = express.Router(); 
const authController = require("../controller/authController");


// Get Page

router.get("/login",authController.getPageLoginController);

router.get('/logout' , authController.logoutController);

router.get('/verifyUser' , authController.getPageVerifyUser);


  
// Action

router.post('/login' , authController.loginController);

router.post('/verifyUser' , authController.verifyPost);



// API Route



module.exports = router