const express = require('express');
const app = express();

const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const adminRoute = require('./routes/adminRoute');

// api
// const apiLogin = require('./api/apiLogin.json');

const session = require('express-session');
const { initDatabase } = require('./database/databaseConnector');

// Configuration de Session
const sessionConfig =  session({
    secret: 'dvf025vx4d2vs5vs2vqe1bf2ds5gbsfd6sf52sd2fxb5sdgb8gf5dh5z5rdf6hbdfb9d8gbrs74b1fg',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Modifier à "true" si vous utilisez HTTPS
});


// Middleware pour parser les données POST
app.use(express.urlencoded({ extended: true }));

// initialiser la connexion sur le base de donnée
initDatabase();
// Ato no apetraka ny partie vue
app.set('views','./views');

// definiissena ny moteur de template 
app.set('view engine','ejs');

app.use(sessionConfig);
app.use('/auth',authRoute);
app.use('/user',userRoute);
app.use('/admin',adminRoute);


// middleware pour utiliser dossier public
app.use('/public' , express.static('public'));




// Redirigena any @ login ny index route
app.get('/', (req,res) => {
    res.redirect('/auth/login'); 
})

// port n'ilay application
let port = process.env.PORT || 8010;

// ity no mihaina anlay requete avy aminy navigateur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);