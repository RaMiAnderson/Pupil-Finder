const authentificationService = require("../services/authentificationService");

const getHomepage = (req,res) => {
    const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
    if (stateConnection) {
        res.render('user/userHome');
    } else {
        res.redirect('auth/login');
    }
}

module.exports = {
    getHomepage
}