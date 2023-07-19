const authentificationService = require("../services/authentificationService");



const loginController = async (req,res) => {
        const user = req.body;
        const userConnected = await authentificationService.login(user,req);
        if (userConnected.status == 200){
           
            if (userConnected.role !== "user") res.redirect(`/admin`)
            else res.redirect(`/user`);
        } 
        else  res.redirect(`/auth/login?message=${userConnected.message}`);
    
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


   

const deleteUserController = (req,res) => {

}







module.exports = {
    loginController,
    logoutController,
    getPageLoginController,

};