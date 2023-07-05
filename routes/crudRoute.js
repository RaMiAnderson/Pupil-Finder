const express = require('express');
const router = express.Router(); 
const crudContrroler = require("../controller/crudController");

router.get("/" ,crudContrroler.helloWorld);
router.get('/Login' , crudContrroler.Login);

//Route Temporaire : alohany havitana authentification fotsiny: (Mba afahana iaccedena aminy)
        router.get('/pupilfinder' , crudContrroler.userInterface);
        router.get('/ppupilfinder' , crudContrroler.adminInterface);

module.exports = router;
