const User = require("../model/user");
const Prof = require("../model/prof");



const getAllUserInOneClass = async (classe) => {
    try {
        return new Promise( ( resolve, reject) => {
            User.find( {classe : classe , role : "user"} , (err,userBase) => {
                if (err) console.log(err);
                resolve(userBase);
            })
        });
    } catch (err) {
        console.log(err);
    }
}

const getOnePof = async (email) => {
    try {
        return new Promise( ( resolve, reject) => {
            Prof.findOne( {email : email } , (err,profBase) => {
                if (err) console.log(err);
                resolve(profBase);
            })
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAllUserInOneClass,
    getOnePof
}