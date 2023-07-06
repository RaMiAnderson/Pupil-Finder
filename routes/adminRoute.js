const express = require('express');
const router = express.Router(); 
const adminController = require("../controller/adminController");


// Get Page

router.get("/",adminController.getHomepage);


module.exports = router


