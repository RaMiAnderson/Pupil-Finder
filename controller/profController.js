const authentificationService = require("../services/authentificationService");




const getPageHomeProfController = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if(stateConnection){
        if (req?.session?.user?.role === "prof") res.render('admin/profHome')
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect('/admin');
        };
    } 
    else res.redirect('/auth/login');
}


const getPageAbsenceProfController = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if(stateConnection){
        if (req?.session?.user?.role === "prof") res.render('admin/pages/profAbsence')
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect('/admin');
        };
    } 
    else res.redirect('/auth/login');
}


const getPageNoteProfController = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if(stateConnection){
        if (req?.session?.user?.role === "prof") res.render('admin/pages/profNote')
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect('/admin');
        };
    } 
    else res.redirect('/auth/login');
}



module.exports = {
    getPageAbsenceProfController,
    getPageHomeProfController,
    getPageNoteProfController
}