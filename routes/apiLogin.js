const express = require('express');
const router = express.Router();
const apiLoginController = require('../controller/apiLoginController');


// Get api-Login

router.get("/login", apiLoginController);



module.exports = router

