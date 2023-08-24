const authentificationService = require("../services/authentificationService");
const service = require("../services/profService");
const temporary = require("../tmp/temporaryData");
const gererService = require("../services/gererService");





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

        // Maka classe dispo
        const dataInClassChoisi = await temporary.dataClasseChoisi;
        if (dataInClassChoisi !== undefined) {
            var data = {
                dataInClassChoisi : dataInClassChoisi
            }
        } else {
            var data = {
                dataInClassChoisi : 0
            }
        }

        if (req?.session?.user?.role === "prof") res.render('admin/pages/profAbsence' , {data})
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


const getUserInClass = async (req,res) => {
    const result = await service.getAllUserInOneClass(req.body.classeChoisi);
    temporary.dataClasseChoisi = result;
    res.redirect("/prof/absence");
}


const apiGetClasseDispo = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "prof") {
            const classeDispo = await gererService.getClasseDispo("admin");
            // console.log(classeDispo);
            res.json(classeDispo);
        }  
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect("/admin");
        };
    } 
    else res.redirect("/auth/login");
}

const apiGetfonctionProf = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "prof") {
            const profCoressp = await service.getOnePof(req?.session?.user?.email);
            const prof = {
                fonction : profCoressp.fonction
            }
            res.json(prof);
        }  
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect("/admin");
        };
    } 
    else res.redirect("/auth/login");
}





module.exports = {
    getPageAbsenceProfController,
    getPageHomeProfController,
    getPageNoteProfController,

    getUserInClass,
    apiGetClasseDispo,
    apiGetfonctionProf,
  
}