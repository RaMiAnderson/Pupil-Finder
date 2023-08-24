const express = require('express');
const router = express.Router(); 

const profController = require("../controller/profController");
const service = require("../services/profService");
const adminController = require("../controller/adminController");
const authController = require("../controller/authController");




router.get("/" , profController.getPageHomeProfController);

router.get("/absence" , profController.getPageAbsenceProfController);

router.get("/note" , profController.getPageNoteProfController);

router.post("/absence/getUserInClass" , profController.getUserInClass );

router.post("/note/findClass", adminController.findClass );


// API

router.get("/absence/getClasseDispo" , profController.apiGetClasseDispo);

router.get("/note/getClasseDispo" , profController.apiGetClasseDispo);

router.get("/absence/getFonctionProf" ,  profController.apiGetfonctionProf);

router.get("/note/getFonctionProf" ,  profController.apiGetfonctionProf);

router.post("/deconnexion" , authController.logoutController );





module.exports = router