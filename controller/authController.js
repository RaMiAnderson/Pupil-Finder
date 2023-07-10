const authentificationService = require("../services/authentificationService");



const loginController = async (req,res) => {
        const user = req.body;
        const userConnected = await authentificationService.login(user,req);
        if (userConnected.status == 200){
            // res.redirect(`/${userConnected.role}`);

            // User ou Admin ? : tsy redirigena satry te ipasse donné am ejs an'i user, afaka antaniana aho (ANDERSON)
            if (userConnected.role !== "user") res.redirect(`/admin`)
            else res.render(`user/userHome` , data = userConnected);
        } 
        else  res.redirect(`/auth/login?message=${userConnected.message}`);
    
};
 
const addUserController = async (req,res) => {
    try {
        const user = req.body;
        const result = await authentificationService.addUser(user);
        res.redirect('/auth/login');
    } catch (error) {
        const messageError = "Erreur d'ajout de l'utilisateur";
        console.log(error);
        res.redirect(`/auth/add-user?message=${messageError}`);
    };
};

const logoutController = (req,res) => {
    // Détruire la session et rediriger vers la page de connexion
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

const getPageAddUserController = (req,res) => {
    res.render('addUser');
};
   

const deleteUserController = (req,res) => {

}

module.exports = {
    loginController,
    addUserController,
    logoutController,
    getPageLoginController,
    getPageAddUserController
};