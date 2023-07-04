const express = require('express');
const app = express();
const crudRoute = require('./routes/crudRoute');
const { initDatabase } = require('./database/databaseConnector');


// initialiser la connexion sur le base de donnée
initDatabase();

// Ato no apetraka ny partie vue
app.set('views','./views');

// definiissena ny moteur de template 
app.set('view engine','ejs');

app.use(crudRoute);

// port n'ilay application
let port = process.env.PORT || 8010;

// ity no mihaina anlay requete avy aminy navigateur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);