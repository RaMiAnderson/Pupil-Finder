

const helloWorld = (req, res) => {
    res.render('hello');
};

const Login = (req, res) => {
    res.render('Login');
};


    //Temporaire : alohany havitana authentification fotsiny: (Mba afahana iaccedena aminy)

    // Stockage données tmp
    const compte = [
        {
            nomUser: "PIERRE",
            prenomUser: "Girou",
            genre: "Homme",
            adress: "Lot 32VKA Ampandrana",
            phone: "034 00 000 00",
            gmail: "mimi@gmail.com",
            numInClass: 1,
            matricule: 101,
            nomPere: "B pro ",
            prenomPere: "Dev",
            nomMere: "Kamdjou",
            prenomMere: "Duplex",
            fonctPere: "Developpeur",
            fonctMere: "DevOps",
            adressPere: "Lot 32VKA Ampandrana",
            adressMere: "Lot 32VKA Ampandrana",
            filiere: "EMII",
            classe: "2 A"
        },
        {
            nomUser: "BOBO",
            prenomUser: "TOTI",
            genre: "Femme",
            address: "Lot 54VKA Analakely",
            phone: "032 00 000 00",
            gmail: "kikoko@gmail.com",
            numInClass: 2,
            matricule: 102,
            nomPere: "Udemy ",
            prenomPere: "Tutori",
            nomMere: "Stack",
            prenomMere: "Overflow",
            fonctPere: "Cuisinier",
            fonctMere: "Vendeuse",
            adressPere: "Lot 54VKA Analakely",
            adressMere: "Lot 54VKA Analakely",
            filiere: "IGGLIA",
            classe: "1 B"
        }
    ];
    const annonce = [
        {
            type: "Info Général",
            date: "12/06/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosdkekdek ejefeofjoeejejec eceojfeefe efoefekfjef efefrfzfzf zefzefzefzfzdfzef fzefzfdzfzf'fzedfzfzff zdfzffzefzef ezfzfdsfrzv sfvzfzdfzefz fzgr"
        },
        {
            type: "Info Général",
            date: "13/06/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosd"
        },
        {
            type: "Info Général",
            date: "15/06/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosd"
        }
    ];
    const notif = [
        {
            date: "12/06/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosdkekdek ejefeofjoeejejec eceojfeefe efoefekfjef efefrfzfzf zefzefzefzfzdfzef fzefzfdzfzf'fzedfzfzff zdfzffzefzef ezfzfdsfrzv sfvzfzdfzefz fzgr"
        },
        {
            date: "13/06/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosd"
        },
        {
            date: "16/06/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosd"
        },
        {
            date: "20/06/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosd zdzdzd eededfrf gfgrgrg"
        },
        {
            date: "31/06/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosd fsfzezefz fdfzdf"
        },
        {
            date: "05/07/2023",
            content: "lorem ipsum dolor sit amet, kokokok ldozjdzjhzjàjdosd fzfz'fzfzfefzefzfzdfzefze fzefzefze fezfzegzgz fzefzefzdfz fzefdfzfe fzdfzefze fzedfzefzd fzefzef zefzefz efze fz ef zef zefzefz efzefd"
        }
    ];

    // Fonction du route
    const userInterface = (req,res) => {  



        //Tous les données de l' Utilisateur correspondant 
        const user = compte[1];

        res.render('UserInterface' , {
            userdb: user,
            userAnnonce: annonce,
            userNotif: notif
        });
    };

    const adminInterface = (req , res) => {
        //Tous les données de l' Utilisateur correspondant 
        const user = compte[1];
        res.render('AdminInterface' ,{
            userAnnonce: annonce,
            userNotif: notif
        });
    };

module.exports = {
    helloWorld,
    Login,
    userInterface,
    adminInterface
};
