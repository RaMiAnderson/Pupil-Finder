
const authentificationService = require("../services/authentificationService");
const gererService = require('../services/gererService');
const temporaryData = require('../tmp/temporaryData');
const annonceService = require('../services/annonceService');



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

const getAnnonce = async (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        if (req?.session?.user?.role === "admin"){
            var allAnnonce = Object.values( await annonceService.getAllAnnonce());
            
            const data = {
                allAnnonce : allAnnonce
            }

            res.render("admin/pages/adminAnnonce" , {data})
        } 
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
                listMatiere : Object.values(await gererService.getMatiereDispo(req?.session?.user?.role)),
                listUsers : Object.values(await gererService.getAllUsers()),
                listClasse : Object.values(await gererService.getClasseDispo("admin"))
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


const getPageAddUserController = (req,res) => {
    res.render('addUser');
};







// POST

const addMatiereController = async (req,res) => {
    try {
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) {
            const matiere = req.body;
            const result = await gererService.addMatiere(matiere);
            res.redirect('/admin/gerer');
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
            res.redirect("/admin/gerer");
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
            res.redirect('/admin/gerer');
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
        const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
        if (stateConnection) {
            const user = req.body;
            const result = await authentificationService.addUser(user);
            res.redirect('/admin/gerer');
        }
        else res.redirect('auth/login')
    } catch (error) {
        const messageError = "Erreur d'ajout de l'utilisateur";
        console.log(error);
        res.redirect(`/auth/add-user?message=${messageError}`);
    };
};


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

    addMatiereController,
    getNmbrMatiere,
    addClasseController,
    addUserController,
    addAnnonce,


    deleteOneUser,


    dataGerer,
    getClasseDispo,
    getAllAnonceController
}