
const Annonce = require('../model/annonce');




const getAllAnnonce  = async () =>{
    try{
        return new Promise( (resolve , reject) => {
            Annonce.find( {} , (err, userBase) => {
                if (err){
                    console.log(err);
                    reject("Errreur Server");
                };
                resolve(userBase);
            
            })
        })
    }
    catch (err) {
        console.log(err);
        throw "ERROR SERVER"
    }
}

const deleteAnnonceByIdentifiant = async (Id) => {
    try {
        return await Annonce.findOneAndDelete( { _id : Id } );
    }
    catch (err) {
        console.log(err);
    }
}

const parseTimeBd = async (date) => {
    var stringify = date.toISOString();
    var sectionPerT = stringify.split("T")[0];
    let format = new Date(sectionPerT).toLocaleDateString('fr-Fr' , {
        year: "numeric",
        month: "long",
        day : "numeric"
    });
    return format;
}

module.exports = {
    getAllAnnonce,
    deleteAnnonceByIdentifiant,
    parseTimeBd
}