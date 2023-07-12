const authentificationService = require("../services/authentificationService");



const getHomepage = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") res.render('admin/adminHome')
        else res.redirect('/user');
    } 
    else res.redirect('auth/login');
}

const getAbsence = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if(stateConnection){
        if (req?.session?.user?.role === "admin") res.render('admin/pages/adminAbsence')
        else res.redirect('/user');
    } 
    else res.redirect('auth/login');
}

const getAnnonce = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") res.render("admin/pages/adminAnnonce")
        else res.redirect('/user');
    } 
    else res.redirect("auth/login");
}

const getApayer = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") res.render("admin/pages/adminApayer")
        else res.redirect('/user');
    } 
    else res.redirect("auth/login");
}

const getCalendar = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminCalendar")
        else res.redirect('/user');
    }
    else res.redirect("auth/login");
}

const getEdt = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminEdt")
        else res.redirect('/user');
    } 
    else res.redirect("auth/login");
}

const getGerer = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminGerer")
        else res.redirect('/user');
    } 
    else res.redirect("auth/login");
}

const getNote = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminNote")
        else res.redirect('/user');
    } 
    else res.redirect("auth/login");
}

const getNotif = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminNotif")
        else res.redirect('/user');
    } 
    else res.redirect("auth/login");
}



const addFiliere = (req , res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) res.render('admin/post/filiere')
    else res.redirect('auth/login');
}

const addMatiere = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) res.render('admin/post/matiere')
    else res.redirect('auth/login');
}


module.exports = {
    getHomepage,
    getAbsence,
    getAnnonce,
    getApayer,
    getCalendar,
    getEdt,
    getGerer,
    getNote,
    getNotif,
    addFiliere,
    addMatiere
}