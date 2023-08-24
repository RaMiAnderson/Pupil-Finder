const express = require('express');
const router = express.Router(); 

const profController = require("../controller/profController");
const service = require("../services/profService");




router.get("/" , profController.getPageHomeProfController);

router.get("/absence" , profController.getPageAbsenceProfController);

router.get("/note" , profController.getPageNoteProfController);

router.post("/absence/getUserInClass" , profController.getUserInClass );


// API

router.get("/absence/getClasseDispo" , profController.apiGetClasseDispo);

router.get("/absence/getFonctionProf" ,  profController.apiGetfonctionProf);



module.exports = router