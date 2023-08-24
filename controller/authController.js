const authentificationService = require("../services/authentificationService");
const temporaryData = require("../tmp/temporaryData");



const loginController = async (req,res) => {
        const user = req.body;
        const userConnected = await authentificationService.login(user,req);
        if (userConnected.status == 200){
           
            if (userConnected.role === "user") res.redirect(`/user`)
            else {
                 if (userConnected.role === "admin") res.redirect(`/admin`)
                 else res.redirect(`/prof`);
            };
        } 
        else  res.redirect(`/auth/login?message=${userConnected.message}`);
     
};
  


const logoutController = (req,res) => {
    // Détruire la session et rediriger vers la page de connexion
    temporaryData.dataClasseChoisi = undefined;
    temporaryData.dataClasseChoisiAdmin = undefined;
    temporaryData.dataFindClass = undefined;
    temporaryData.dataNombreMatiere = undefined;
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/auth/login');
    });
};

const getPageLoginController = (req, res) => {
    const stateConnexion = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnexion) {
        res.redirect(`/${req?.session?.user?.role}`);
        return;
    }
    res.render('Login');
};

const getPageVerifyUser = (req,res) => {
    res.render('verifyRoleAddUser');
}

const verifyPost = async (req , res) => {
    const userTest = await authentificationService.checkPasswordUser(req.body);
    userTest.raison = "inscription";
    // req.session.destroy((err) => {
    //     if (err) console.log(err);
    // });
    
    req.session.user = userTest;
    if (userTest.status == 200){
        if (userTest.role === "admin")  res.redirect(`/admin/gerer/add-user`)
        else logoutController(req,res);
    } 
    else  res.redirect(`/auth/verifyUser?message=${userTest.message}`);

}


   

const deleteUserController = (req,res) => {

}







module.exports = {
    loginController,
    logoutController,
    getPageLoginController,
    getPageVerifyUser,
    verifyPost

};