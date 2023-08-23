const express = require('express');
const router = express.Router(); 

const profController = require("../controller/profController");




router.get("/" , profController.getPageHomeProfController);

router.get("/absence" , profController.getPageAbsenceProfController);

router.get("/note" , profController.getPageNoteProfController);




module.exports = router