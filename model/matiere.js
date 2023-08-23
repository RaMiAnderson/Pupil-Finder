const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const matiereSchema = Schema({
    nomMatiere : {type : String, required : true},
    nomProf : {type: String, required: true},
    emailProf : { type : String , required : true }
});
module.exports = mongoose.model("matiere", matiereSchema);
