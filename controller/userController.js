const authentificationService = require("../services/authentificationService");
const User = require("../model/user");
const userService = require("../services/userService");
const annonceService = require('../services/annonceService');

// GET

const getHomepage = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/userHome");
    else {
        if (req?.session?.user?.role === "admin") res.redirect('/admin')
        else res.redirect('/prof');
      };

  } else {
    res.redirect("/auth/login");
  }
};

const getAbsence = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/pages/userAbsence");
    else {
      if (req?.session?.user?.role === "admin") res.redirect('/admin')
      else res.redirect('/prof/absence');
    };

  } else res.redirect("/auth/login");
};

const getAnnonce = async (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user"){
      var allAnnonce = Object.values( await annonceService.getAllAnnonce());
      var dateAllAnnonce = [];
            for (var i = 0 ; i < allAnnonce.length ; i++){
                dateAllAnnonce[i] = await annonceService.parseTimeBd(allAnnonce[i].datePub);
            };
            
            const data = {
                allAnnonce : allAnnonce ,
                dateAllAnnonce : dateAllAnnonce
            }

            res.render("user/pages/userAnnonce" , {data});
    }  
    else {
      if (req?.session?.user?.role === "admin") res.redirect('/admin')
      else res.redirect('/prof');
    };

  } else res.redirect("/auth/login");
};

const getApayer = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/pages/userApayer");
    else {
      if (req?.session?.user?.role === "admin") res.redirect('/admin')
      else res.redirect('/prof');
    };

  } else res.redirect("/auth/login");
};

const getCalendar = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/pages/userCalendar");
    else {
      if (req?.session?.user?.role === "admin") res.redirect('/admin')
      else res.redirect('/prof');
    };

  } else res.redirect("/auth/login");
};

const getEdt = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/pages/userEdt");
    else {
      if (req?.session?.user?.role === "admin") res.redirect('/admin')
      else res.redirect('/prof');
    };

  } else res.redirect("/auth/login");
};

const getProfil = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") {
      const userEmail = req?.session?.user?.email;
      User.findOne({ email: userEmail }, async (err, userBase) => {
        if (err) console.log(err);
        let dateFinish = await userService.configDate(userBase.dateNaissance);
        const UserProfil = {
          nom: userBase.nom,
          prenom: userBase.prenom,
          genre: userBase.genre,
          dateNaissance: dateFinish,
          adresseEleve: userBase.adresseEleve,
          email: userBase.email,
          numeros: userBase.numeros,
          classe: userBase.classe,
          numInClasse : userBase.numInClasse,
          matricule : userBase.matricule,
          role: userBase.role,
          nomPere: userBase.nomPere,
          adressePere: userBase.adressePere,
          adresseMere: userBase.adresseMere,
          proffesionPere: userBase.proffesionPere,
          numerosPere: userBase.numerosPere,
          nomMere: userBase.nomMere,
          proffesionMere: userBase.proffesionMere,
          numerosMere: userBase.numerosMere
        };
        // Passage données vers user page
        res.render("user/pages/userProfil", { dataProfil: UserProfil });
      });
    } else {
      if (req?.session?.user?.role === "admin") res.redirect('/admin')
      else res.redirect('/prof');
    };
  } else res.redirect("/auth/login");
};

const getNote = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/pages/userNote");
    else {
      if (req?.session?.user?.role === "admin") res.redirect('/admin')
      else res.redirect('/prof/note');
    };

  } else res.redirect("/auth/login");
};


// POST

module.exports = {
  getHomepage,
  getAbsence,
  getAnnonce,
  getApayer,
  getCalendar,
  getEdt,
  getProfil,
  getNote,
  getProfil,
};
