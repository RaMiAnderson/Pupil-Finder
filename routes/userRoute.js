const express = require('express');
const router = express.Router(); 
const userController = require("../controller/userController");
const authController = require("../controller/authController");

 
// Get Page

router.get("/",userController.getHomepage);

router.get("/absence" , userController.getAbsence);

router.get("/annonce" , userController.getAnnonce);

router.get("/apayer" , userController.getApayer);

router.get("/calendrier" , userController.getCalendar);

router.get("/edt" , userController.getEdt);

router.get("/profil" , userController.getProfil);

router.get("/note" , userController.getNote);

router.get("/notification" , userController.getNotif);



// ------- POST       



// logout

router.post("/deconnexion" , authController.logoutController );



module.exports = router

 