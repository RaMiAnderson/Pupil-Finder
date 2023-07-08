const express = require('express');
const router = express.Router(); 
const userController = require("../controller/userController");


// Get Page

router.get("/",userController.getHomepage);



module.exports = router

 