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




 

//---------------------- Post --------------- 


// -------GERER-----
router.post('/gerer/add-matiere' , adminController.addMatiereController );

router.post('/gerer/nombre-matiere' , adminController.getNmbrMatiere);

router.post('/gerer/add-classe' , adminController.addClasseController);

router.post("/gerer/add-user" ,adminController.addUserController);

// ----Annonce

router.post("/annonce/add-annonce" ,adminController.addAnnonce);







// logout

router.post("/deconnexion" , authController.logoutController );



// --------------------- DELETE ----------

// gerer

router.post("/gerer/delete-on-list" , adminController.deleteOneUser);

router.post("/gerer/delete-on-listmatiere" , adminController.deleteOneMatiere);

router.post("/gerer/delete-on-classe"  , adminController.deleteOneClasse );





// API route 


router.get("/gerer/getDataGerer" , adminController.dataGerer );

router.get("/gerer/add-user/getClasse" , adminController.getClasseDispo);

router.get("/annonce/getAllAnnonce" , adminController.getAllAnonceController);





module.exports = router

