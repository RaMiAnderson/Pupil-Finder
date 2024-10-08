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



router.get("/gerer/add-user",adminController.getPageAddUserController);

router.get("/gerer/add-prof" , adminController.getPageAddProf);




 

//---------------------- Post --------------- 


// -------GERER-----
router.post('/gerer/add-matiere' , adminController.addMatiereController );

router.post('/gerer/nombre-matiere' , adminController.getNmbrMatiere);

router.post('/gerer/add-classe' , adminController.addClasseController);

router.post("/gerer/add-user" ,adminController.addUserController);

router.post("/gerer/add-prof" , adminController.addProfController);

// ----Annonce

router.post("/annonce/add-annonce" ,adminController.addAnnonce);

// Absence

router.post("/absence/getUserInClass", adminController.getUserInClass );

// Note

router.post("/note/findClass", adminController.findClass );







// logout

router.post("/deconnexion" , authController.logoutController );



// --------------------- DELETE ----------

// gerer

router.post("/gerer/delete-on-list" , adminController.deleteOneUser);

router.post("/gerer/delete-on-listmatiere" , adminController.deleteOneMatiere);

router.post("/gerer/delete-on-classe"  , adminController.deleteOneClasse );

router.post("/annonce/delete-on-annonce" , adminController.deleteOneAnnonce );

router.post("/gerer/delete-one-listProf" , adminController.deleteOneProf );




// API route 


router.get("/gerer/getDataGerer" , adminController.dataGerer );

router.get("/gerer/getDataGererProff" , adminController.dataGererProf );

router.get("/gerer/add-user/getClasse" , adminController.getClasseDispo);

router.get("/annonce/getAllAnnonce" , adminController.getAllAnonceController);

router.get("/absence/getClasseDispo" , adminController.getClasseDispo);

router.get("/absence/getMatiereDispo" , adminController.dataGerer );

router.get("/note/getClasseDispo" , adminController.getClasseDispo);








module.exports = router

