const authentificationService = require("../services/authentificationService");
const User = require("../model/user");
const userService = require("../services/userService");

// GET

const getHomepage = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/userHome");
    else res.redirect("/admin");

  } else {
    res.redirect("/auth/login");
  }
};

const getAbsence = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user")
      res.render("user/pages/userAbsence");
    else res.redirect("/admin");

  } else res.redirect("/auth/login");
};

const getAnnonce = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user")
      res.render("user/pages/userAnnonce");
    else res.redirect("/admin");

  } else res.redirect("/auth/login");
};

const getApayer = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user")
      res.render("user/pages/userApayer");
    else res.redirect("/admin");

  } else res.redirect("/auth/login");
};

const getCalendar = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user")
      res.render("user/pages/userCalendar");
    else res.redirect("/admin");

  } else res.redirect("/auth/login");
};

const getEdt = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/pages/userEdt");
    else res.redirect("/admin");

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
    } else res.redirect("/admin");
  } else res.redirect("/auth/login");
};

const getNote = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/pages/userNote");
    else res.redirect("/admin");

  } else res.redirect("/auth/login");
};

const getNotif = (req, res) => {
  const stateConnection = authentificationService.verifyIfAlreadyConnected(req);
  if (stateConnection) {
    if (req?.session?.user?.role === "user") res.render("user/pages/userNotif");
    else res.redirect("/admin");

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
  getNotif,
  getProfil,
};
