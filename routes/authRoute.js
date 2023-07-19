const express = require('express');
const router = express.Router(); 
const authController = require("../controller/authController");


// Get Page

router.get("/login",authController.getPageLoginController);

router.get('/logout' , authController.logoutController);


  
// Action

router.post('/login' , authController.loginController);



// API Route



module.exports = router