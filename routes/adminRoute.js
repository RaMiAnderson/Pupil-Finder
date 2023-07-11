const express = require('express');
const router = express.Router(); 
const adminController = require("../controller/adminController");
const authController = require("../controller/authController")


// Get Page

router.get("/",adminController.getHomepage);

// page des formulaire 

router.get('/add-filiere' , adminController.addFiliere );

router.get('/add-matiere' , adminController.addMatiere );



//Post 



// logout

router.post("/" , authController.logoutController );

module.exports = router

