const express = require('express');
const router = express.Router(); 
const userController = require("../controller/userController");
const authController = require("../controller/authController");


// Get Page

router.get("/",userController.getHomepage);

// logout

router.post("/" , authController.logoutController );



module.exports = router

 