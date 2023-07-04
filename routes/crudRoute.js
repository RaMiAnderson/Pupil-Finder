const express = require('express');
const router = express.Router(); 
const crudContrroler = require("../controller/crudController");

router.get("/" ,crudContrroler.helloWorld);

module.exports = router;