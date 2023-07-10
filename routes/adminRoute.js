const express = require('express');
const router = express.Router(); 
const adminController = require("../controller/adminController");
const authController = require("../controller/authController")


// Get Page

router.get("/",adminController.getHomepage);


// logout

router.post("/" , authController.logoutController );

module.exports = router

