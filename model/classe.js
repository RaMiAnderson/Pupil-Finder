const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const classeSchema = Schema({
    nomClasse : {type : String, required : true},
    matiere : [{type : String,required : true }],
    coeff : [{type: String , required : true}]
});
module.exports = mongoose.model("classe", classeSchema);