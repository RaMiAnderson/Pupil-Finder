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







//---------------------- Post --------------- 


// -------GERER-----
router.post('/gerer/add-matiere' , adminController.addMatiereController );

router.post('/gerer/nombre-matiere' , adminController.getNmbrMatiere);

// router.post('/gerer/add-classe' , adminController.addClasseController);


// logout

router.post("/deconnexion" , authController.logoutController );





// API route 


router.get("/gerer/getDataGerer" , adminController.dataGerer );







module.exports = router

