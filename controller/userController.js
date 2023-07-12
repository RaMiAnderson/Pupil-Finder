const authentificationService = require("../services/authentificationService");


// GET

const getHomepage = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "user") res.render('user/userHome')
        else res.redirect('/admin');
    } else {
        res.redirect('auth/login');
    }
}

const getAbsence = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if(stateConnection) {
        if (req?.session?.user?.role === "user") res.render('user/pages/userAbsence')
        else res.redirect('/admin');
    } 
    else res.redirect('auth/login');
}

const getAnnonce = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection){
        if (req?.session?.user?.role === "user") res.render("user/pages/userAnnonce")
        else res.redirect('/admin');
    } 
    else res.redirect("auth/login");
}

const getApayer = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection){
        if (req?.session?.user?.role === "user") res.render("user/pages/userApayer")
        else res.redirect('/admin');
    } 
    else res.redirect("auth/login");
}

const getCalendar = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection){
        if (req?.session?.user?.role === "user") res.render("user/pages/userCalendar")
        else res.redirect('/admin');
    } 
    else res.redirect("auth/login");
}

const getEdt = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "user")  res.render("user/pages/userEdt")
        else res.redirect('/admin');
    }
    else res.redirect("auth/login");
}

const getProfil = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "user") res.render("user/pages/userProfil")
        else res.redirect('/admin');
    } 
    else res.redirect("auth/login");
}

const getNote = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "user") res.render("user/pages/userNote")
        else res.redirect('/admin');
    } 
    else res.redirect("auth/login");
}

const getNotif = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "user") res.render("user/pages/userNotif")
        else res.redirect('/admin');
    } 
    else res.redirect("auth/login");
}

// POST

module.exports = {
    getHomepage,
    getAbsence,
    getAnnonce,
    getApayer,
    getCalendar,
    getEdt,
    getProfil,
    getNote,
    getNotif,
    getProfil
}