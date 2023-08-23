const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const Schema = mongoose.Schema;



const profSchema = Schema({
    //Unique id created automatically by the mongoose
    nom: { type: String, required: true },
    prenom:{type : String, required: true},
    genre:{type : String, required: true , Enumerator : ["Homme" , "Femme"]},
    dateNaissance:{type : Date, required: true},
    adresse:{type : String, required: true},
    email: { type: String, required: true, unique: true },
    numeros: { type: String, required: true, unique: true },
    role: { type: String, default: 'prof' },
    password: { type: String, required: true },
    fonction : { type : String , required : true },
    

});




profSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Prof", profSchema);