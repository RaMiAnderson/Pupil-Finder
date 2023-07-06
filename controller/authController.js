const authentificationService = require("../services/authentificationService");



const loginController = async (req,res) => {
    try {
        const user = req.body;
        const userConnected = await authentificationService.login(user,req);
        if (userConnected) {
            // ILAY ROLE NO PASSEKO ZAY MITOVY AMLE PREFIX ANLE ROUTE DE PAGE : AFKA ANONTANIANA AHO ;)
            res.redirect(`/${userConnected}`);
            return; 
        }
        res.redirect('/auth/login');
    } catch (error) {
        res.redirect(`/auth/login?message=${error}`);
    };
};

const addUserController = async (req,res) => {
    try {
        const user = req.body;
        const result = await authentificationService.addUser(user);
        res.redirect('/auth/login');
    } catch (error) {
        console.log(error);
        res.redirect(`/auth/add-user?message=${error}`);
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