const express = require('express');
const router = express.Router(); 
const adminController = require("../controller/adminController");
const authController = require("../controller/authController")



//------------- Get Page ------------

router.get("/",adminController.getHomepage);

router.get("/absence" , adminController.getAbsence);

router.get("/annonce" , adminController.getAnnonce);

router.get("/apayer" , adminController.getApayer);

router.get("/calendrier" , adminController.getCalendar);

router.get("/edt" , adminController.getEdt);

router.get("/gerer" , adminController.getGerer);

router.get("/note" , adminController.getNote);

router.get("/notification" , adminController.getNotif);







// page des formulaire 

router.get('/add-filiere' , adminController.addFiliere );

router.get('/add-matiere' , adminController.addMatiere );





//---------------------- Post --------------- 



// logout

router.post("/" , authController.logoutController );

module.exports = router

