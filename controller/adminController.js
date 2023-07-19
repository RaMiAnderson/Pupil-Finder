
const authentificationService = require("../services/authentificationService");
const gererService = require('../services/gererService');
const temporaryData = require('../tmp/temporaryData');



const getHomepage = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") res.render('admin/adminHome')
        else res.redirect('/user');
    } 
    else res.redirect('/auth/login');
}

const getAbsence = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if(stateConnection){
        if (req?.session?.user?.role === "admin") res.render('admin/pages/adminAbsence')
        else res.redirect('/user');
    } 
    else res.redirect('/auth/login');
}

const getAnnonce = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") res.render("admin/pages/adminAnnonce")
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getApayer = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") res.render("admin/pages/adminApayer")
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getCalendar = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminCalendar")
        else res.redirect('/user');
    }
    else res.redirect("/auth/login");
}

const getEdt = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminEdt")
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getGerer = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") {
            const data =  {
                nombreMatiere: await temporaryData.dataNombreMatiere,
               
            };
        

            res.render("admin/pages/adminGerer" , {data} );
        }  
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getNote = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminNote")
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getNotif = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminNotif")
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}


const getPageAddUserController = (req,res) => {
    res.render('addUser');
};







// POST

const addMatiereController = async (req,res) => {
    try {
        const matiere = req.body;
        const result = await gererService.addMatiere(matiere);
        res.redirect('/admin/gerer')
    } catch (err) {
        const messageError = ` ERREUR d'ajout de la matiere  `;
        console.log(err);
        res.redirect(`/admin/gerer?message=${messageError}`);
    }
}


const getNmbrMatiere = async (req,res) => {
    try {
        const nombreMatiere = parseInt(req.body.nombreMatiere);
        const envoie = await gererService.NombreMatiere(nombreMatiere);
        res.redirect("/admin/gerer");
    }
    catch (err) {
        if (err) {
            const messageError = "Erreur du post du nombre de la matiere";
            console.log(err);
            res.redirect(`/admin/gerer?message=${messageError}`);
        }
    }
}

  
const addClasseController = async (req, res) => {
    try {
        const classe = req.body;
        const structuredDataClass = await gererService.structureDataClasse(classe);
        const result = await gererService.addClasse(structuredDataClass);
        res.redirect('/admin/gerer');
    }
    catch (err) {
        const messageError = "ERREUR d'ajout de la classe";
        console.log(err);
        res.redirect(`/admin/gerer?message=${messageError}`);
    };
}


const addUserController = async (req,res) => {
    try {
        const user = req.body;
        const result = await authentificationService.addUser(user);
        res.redirect('/admin/gerer');
    } catch (error) {
        const messageError = "Erreur d'ajout de l'utilisateur";
        console.log(error);
        res.redirect(`/auth/add-user?message=${messageError}`);
    };
};







// --------------- API ----------

const dataGerer = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") {
            const matiereDispo = await gererService.getMatiereDispo(req?.session?.user?.role);
            res.json(matiereDispo);
        }  
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getClasseDispo = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") {
            const classeDipso = await gererService.getClasseDispo(req?.session?.user?.role);
            
            res.json(classeDipso);
        }  
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
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
    getPageAddUserController,

    addMatiereController,
    getNmbrMatiere,
    addClasseController,
    addUserController,


    dataGerer,
    getClasseDispo
}