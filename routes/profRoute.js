const express = require('express');
const router = express.Router(); 

const profController = require("../controller/profController");
const adminController = require("../controller/adminController");



router.get("/absence" , adminController.getAbsence);



module.exports = router