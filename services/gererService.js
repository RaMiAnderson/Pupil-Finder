const classe = require('../model/classe');
const Matiere = require('../model/matiere');
const temporaryData = require('../tmp/temporaryData');



const getMatiereDispo = async (role) => {
    try{
        if(role !== "admin") return false
        else return new Promise( (resolve, reject) => {
            Matiere.find( {} , (err,matierBase) =>{
                if (err) {
                    console.log(err);
                    reject("ErrorServeur");
                }
                resolve(matierBase);
            });
        });

    }
    catch (err) {
        const messageError = "Erreur : Server failed";
        console.log(err);
        throw messageError;
    }
}


const addMatiere = (dataMatiere) => {
    try {
        const matiereModel = new Matiere();

        matiereModel.nomMatiere = dataMatiere.nomMatiere;
        matiereModel.nomProf = dataMatiere.nomProf;
        return new Promise( (resolve,reject) => {
            matiereModel.save( (err) => {
                if (err) {
                    console.log(err);
                    reject("Error: post matiere failed");
                }
                resolve(matiereModel);
            })
        });
    }
    catch (err){
        throw ` ERROR : ${err} `
    }
}



const NombreMatiere = async (nombre) => {
    if ( (nombre >= 0) && (typeof(nombre) == "number") ){
        temporaryData.dataNombreMatiere = nombre;
        return nombre
    } 
    else{
        temporaryData.dataNombreMatiere = undefined;
        return 0;
    } 
}


const structureDataClasse = async  (classe) => {
    const nombreMatiere = await temporaryData.dataNombreMatiere;
    let listMatiereClasse = [];
    let listCoeffMatiere = [];
    for (var i = 0 ; i < nombreMatiere; i++){
        // alaina izay matière sy coeff de sarahana anaty tab distinct
        var matiere = classe[`nomMatiere${i}`];
        var coeff = classe[`coeffMatiere${i}`];

        listMatiereClasse.push(matiere);
        listCoeffMatiere.push(coeff);
    }
   
    let structuredData = {
        nomClasse: classe.nomClasse,
        listMatiere : listMatiereClasse,
        listCoeff : listCoeffMatiere
    }
    return structuredData;
} 



const addClasse = (dataClasse) => {
    try {
        const classeModel = new classe();

        classeModel.nomClasse = dataClasse.nomClasse;
        classeModel.matiere = dataClasse.listMatiere;
        classeModel.coeff = dataClasse.listCoeff;

        return new Promise((resolve, reject) => {
            classeModel.save( (err) => {
                if (err){
                    console.log(err);
                    reject("ERROR: Post class Failed");
                }
                resolve(classeModel)
            })
        });
    }
    catch (err) {
        throw `ERROR : ${err}`;
    }
}


module.exports = {
    getMatiereDispo,

    structureDataClasse,
    addMatiere,
    addClasse,
    NombreMatiere
}