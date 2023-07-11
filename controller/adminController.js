const authentificationService = require("../services/authentificationService");



const getHomepage = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) res.render('admin/adminHome')
    else res.redirect('auth/login');
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
    addFiliere,
    addMatiere
}