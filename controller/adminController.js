
const authentificationService = require("../services/authentificationService");
const gererService = require('../services/gererService');
const temporaryData = require('../tmp/temporaryData');
const annonceService = require('../services/annonceService');
const annonce = require("../model/annonce");



const getHomepage = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") res.render('admin/adminHome')
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect('/prof');
        }
    } 
    else res.redirect('/auth/login');
}

const getAbsence = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if(stateConnection){
        const dataInClassChoisi = await temporaryData.dataClasseChoisiAdmin;
        if (dataInClassChoisi !== undefined) {
            var data = {
                dataInClassChoisi : dataInClassChoisi
            }
        } else {
            var data = {
                dataInClassChoisi : 0
            }
        }
        if (req?.session?.user?.role === "admin") res.render('admin/pages/adminAbsence', {data})
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect('/prof/absence');
        }
    } 
    else res.redirect('/auth/login');
}

const getAnnonce = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin"){
            var allAnnonce = Object.values( await annonceService.getAllAnnonce());
            var dateAllAnnonce = [];
            for (var i = 0 ; i < allAnnonce.length ; i++){
                dateAllAnnonce[i] = await annonceService.parseTimeBd(allAnnonce[i].datePub);
            };
            
            const data = {
                allAnnonce : allAnnonce,
                dateAllAnnonce : dateAllAnnonce
            }

            res.render("admin/pages/adminAnnonce" , {data})
        } 
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect('/prof');
        };
    } 
    else res.redirect("/auth/login");
}

const getApayer = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") res.render("admin/pages/adminApayer")
        else res.redirect('/user');
    } 
    else {
        if (req?.session?.user?.role === "user") res.redirect('/user')
        else res.redirect('/prof');
    };
}

const getCalendar = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminCalendar")
        else res.redirect('/user');
    }
    else {
        if (req?.session?.user?.role === "user") res.redirect('/user')
        else res.redirect('/prof');
    };
}

const getEdt = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminEdt")
        else res.redirect('/user');
    } 
    else {
        if (req?.session?.user?.role === "user") res.redirect('/user')
        else res.redirect('/prof');
    };
}

const getGerer = async (req,res) => {
    // const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    const stateConnection = req?.session?.user;
    if (stateConnection) {
        if ((req?.session?.user?.role === "admin" ) && (req?.session?.user.raison === "connexion")) {
            const data =  {
                nombreMatiere: await temporaryData.dataNombreMatiere,
                listMatiere : Object.values(await gererService.getMatiereDispo(req?.session?.user?.role)),
                listUsers : Object.values(await gererService.getAllUsers()),
                listClasse : Object.values(await gererService.getClasseDispo("admin")),
                listProf : Object.values(await gererService.getAllProff("admin"))
            };
        

            res.render("admin/pages/adminGerer" , {data} );
        } else {
            if ( (req?.session?.user?.role === "admin") && (req?.session?.user?.raison === "inscription") ) {
                res.redirect('/admin/gerer/add-user');
            } 
            else {
                if (req?.session?.user?.role === "user") res.redirect('/user')
                else res.redirect('/prof');
            };
        }
    } 
    else res.redirect("/auth/login");
}

const getNote = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        const dataFindClass = await temporaryData.dataFindClass;
        if (dataFindClass !== undefined) {
            var data = {
                dataFindClass : dataFindClass
            }
        } else {
            var data = {
                dataFindClass : 0
            }
        }
        if (req?.session?.user?.role === "admin")  res.render("admin/pages/adminNote" , {data})
        else {
            if (req?.session?.user?.role === "user") res.redirect('/user')
            else res.redirect('/prof/note');
        }
    } 
    else res.redirect("/auth/login");
}


const getPageAddUserController = (req,res) => {
    if (req?.session?.user?.role === "admin") res.render('addUser')
    else res.redirect('/');
};

const getPageAddProf = (req,res) => {
    if (req?.session?.user?.role === "admin") res.render('addProf')
    else res.redirect('/');
}







// POST

const addMatiereController = async (req,res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) {
            const matiere = req.body;
            const result = await gererService.addMatiere(matiere);
            res.redirect('/admin/gerer#site-matiere');
        }
        else   res.redirect('/auth/login')
    } catch (err) {
        const messageError = ` ERREUR d'ajout de la matiere  `;
        console.log(err);
        res.redirect(`/admin/gerer?message=${messageError}`);
    }
}


const getNmbrMatiere = async (req,res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) {
            const nombreMatiere = parseInt(req.body.nombreMatiere);
            const envoie = await gererService.NombreMatiere(nombreMatiere);
            res.redirect("/admin/gerer#site-classe");
        }
        else res.redirect('/auth/login')
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
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) {
            const classe = req.body;
            const structuredDataClass = await gererService.structureDataClasse(classe);
            const result = await gererService.addClasse(structuredDataClass);
            res.redirect('/admin/gerer#site-classe');
        }
        else res.redirect('auth/login')
    }
    catch (err) {
        const messageError = "ERREUR d'ajout de la classe";
        console.log(err);
        res.redirect(`/admin/gerer?message=${messageError}`);
    };
}


const addUserController = async (req,res) => {
    try {
        const stateConnection = req?.session?.user;

        if (stateConnection) {
            if ( stateConnection.role = "admin") {
                const user = req.body;
                const result = await authentificationService.addUser(user);
                res.redirect('/admin/gerer/add-user');
            }
            else res.redirect('/user');
        }
        else res.redirect('auth/login')
    } catch (error) {
        const messageError = "Erreur d'ajout de l'utilisateur";
        console.log(error);
        res.redirect(`/auth/add-user?message=${messageError}`);
    };
};

const addProfController = async (req,res) => {
    try {
        const stateConnection = req?.session?.user;
        if (stateConnection) {
            if ( stateConnection.role = "admin") {
                const user = req.body;
                const result = await authentificationService.addProf(user);
                res.redirect('/admin/gerer/add-prof');
            }
            else res.redirect('/user');
        }
        else res.redirect('auth/login')
    } catch (error) {
        const messageError = "Erreur d'ajout du Proffesseur";
        console.log(error);
        res.redirect(`/auth/add-prof?message=${messageError}`);
    };
}


const addAnnonce = async (req,res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) {
            const annonce = req.body;
            const result = await gererService.addAnnonceService(annonce);
            res.redirect('/admin/annonce');
        }
        else res.redirect('/auth/login')
    } catch (err) {
        const messageError = ` ERREUR d'ajout de l'annonce  `;
        console.log(err);
        res.redirect(`/admin/annonce?message=${messageError}`);
    }

}





//------------------------ DELETE -------------
// gerer
const deleteOneUser = async (req, res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) if (req?.session?.user?.role === "admin") {
                const result = await gererService.deleteUserByIdentifiant(req.body.emailDelete);
                res.redirect('/admin/gerer');
            }
            else res.redirect('/user')
           
        else res.redirect('/auth/login')
    }
    catch (err) {
        const messageError = ` ERREUR de suppression `;
        console.log(err);
        res.redirect(`/admin/gerer?message=${messageError}`);
    }
}

const deleteOneMatiere = async (req,res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) if (req?.session?.user?.role === "admin") {
            const result = await gererService.deleteMatiereByIdentifiant(req.body.matiereDelete);
            res.redirect('/admin/gerer#site-matiere');
        }
        else res.redirect('/user');
    }
    catch (err) {
        const messageError = " ERREUR SERVER";
        console.log(err);
        res.redirect(`/admin/gerer?message=${messageError}`);
    }
}

const deleteOneClasse = async (req,res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) if (req?.session?.user?.role === "admin" ) {
            const result = await gererService.deleteClasseByIdentifiant(req.body.classeDelete);
            res.redirect('/admin/gerer#site-classe');
        }
    }
    catch (err) {
        const messageError = " ERREUR SERVER ";
        console.log(err);
        res.redirect(`/admin/gerer?message=${messageError}`);
    }
}

const deleteOneAnnonce = async (req,res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) if (req?.session?.user?.role === "admin" ) {
            const result = await annonceService.deleteAnnonceByIdentifiant(req.body.annonceDelete);
            res.redirect('/admin/annonce');
        }
    }
    catch (err) {
        const messageError = "ERREUR SERVER";
        console.log(err);
        res.redirect(`/admin/annonce?message=${messageError}`);
    }
}

const deleteOneProf = async (req,res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) if (req?.session?.user?.role === "admin" ) {
            const result = await gererService.deleteProfByIdentifiant(req.body.profDelete);
            res.redirect('/admin/gerer#site-prof');
        }
    }
    catch (err) {
        const messageError = "ERREUR SERVER";
        console.log(err);
        res.redirect(`/admin/gerer?message=${messageError}`);
    }
}

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

const dataGererProf = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") {
            const proffDispo = await gererService.getAllProff("admin");
            res.json(proffDispo);
        }  
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getClasseDispo = async (req,res) => {
    const stateConnection = req?.session?.user;;
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") {
            const classeDipso = await gererService.getClasseDispo(req?.session?.user?.role);
            
            res.json(classeDipso);
        }  
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getAllAnonceController = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin") {
            const AllAnonce = await annonceService.getAllAnnonce();
            
            res.json(AllAnonce);
        }  
        else res.redirect('/user');
    } 
    else res.redirect("/auth/login");
}

const getUserInClass = async (req,res) => {
    const result = await gererService.getAllUserInOneClass(req.body.classeChoisi);
    temporaryData.dataClasseChoisiAdmin = result;
    res.redirect("/admin/absence");
}

const findClass = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin" || req?.session?.user?.role === "prof") {
            const classCoressp = await gererService.getOneClass(req.body.classeNote);
            temporaryData.dataFindClass = classCoressp;
            res.redirect("/admin/note");
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
    getPageAddUserController,
    getPageAddProf,

    addMatiereController,
    getNmbrMatiere,
    addClasseController,
    addUserController,
    addAnnonce,
    addProfController,
    getUserInClass ,
    findClass,


    deleteOneUser,
    deleteOneMatiere,
    deleteOneClasse,
    deleteOneAnnonce,
    deleteOneProf,


    dataGerer,
    dataGererProf,
    getClasseDispo,
    getAllAnonceController
}