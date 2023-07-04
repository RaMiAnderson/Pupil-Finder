const mongoose = require("mongoose");
const dbConfig = require("./database.config");
mongoose.Promise = global.Promise;

// remplacer toute cette chaine par l'URI de connexion à votre propre base de donnée
const uri = dbConfig.url;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

const initDatabase = () => {
    mongoose.connect(uri, options)
    .then(() => {
        console.log("Connecté à la base MongoDB pupil sur local !");
        console.log("at URI = " + uri);
        console.log("vérifiez with http://localhost:8010/ que cela fonctionne")
    },
    err => {
        console.log('Erreur de connexion: ', err);
    });
}

module.exports = {
    initDatabase
}