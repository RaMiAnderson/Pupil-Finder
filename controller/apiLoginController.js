const path = require('path');


const apiLoginController = (req,res) => {
         // Pour former un chemin absolu
         const dataLoginPath = path.join(__dirname , '../api/dataLogin.json');
         // Pour Charger et importer lr contenu du fichier JSON situé amle chemin absolu
         const dataLogin = require(dataLoginPath);
         res.json(dataLogin);
};

module.exports = apiLoginController