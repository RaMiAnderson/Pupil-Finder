const bcrypt = require("bcrypt");
const User = require('../model/user') ;



const login = async (user,request) => {
    try {
        const stateConnection = verifyIfAlreadyConnected(request);
        if (stateConnection) return request?.session?.role;
        const userConnected = await checkPasswordUser(user);
        request.session.user = userConnected;
        return userConnected?.role;
    } catch (error) {
        throw error;
    }
}

const verifyIfAlreadyConnected = (request) => {

    if (request?.session?.user) {
        return true;
    }
    return false;
}

const  addUser = async (user) => {
    try {
        const userModel = new User();
        userModel.name = user.name;
        userModel.email = user.email;
        userModel.password = await encryptPassword(user.password);
        userModel.role = user.role;
        return new Promise((resolve, reject) => {
            userModel.save((err) => {
                if (err) {
                    reject(`cant post user :  ${err.message}`);
                }
                resolve(userModel);
            })
        })
    } catch (error) {
        throw ` Error : ${error}`;
    }
}

const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10).then((hash) => {
            resolve(hash);
        }).catch((error) => { reject(error) });
    })
}

const checkPasswordUser = async (user) => {
    try {

        return new Promise((resolve, reject) => {
            User.findOne({ email: user.email }, async (err, userBase) => {
                if (err) { 
                    reject(err) ;
                };
                if (userBase !== null ) {
                    const resultCheck = await comparePasswordencrypted(user.password , userBase.password);
                    if (resultCheck) {
                        const res = {
                            email : userBase.email,
                            name : userBase.name,
                            role : userBase.role,
                        }
                        resolve(res);
                    }   
                    // ETO API POST PASSWORD INCORECT
                    reject('Password incorrect');
                } else {
                    // ETO API POST GMAIL NOT FOUND 404
                    reject('Email not found , please try again with your correct gamil');
                };
            });
        });
    } catch (error) {
        throw `error : ${error}`
    }
};

const comparePasswordencrypted = (inputPassword, databasePassword) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(inputPassword, databasePassword).then((valid) => {
            if (valid) {
                resolve(true);
            };
            resolve(false);
        }).catch((error) => {
            reject(`Error on compare Password ${error}`);
        });
    });
};





module.exports = {
    addUser,
    verifyIfAlreadyConnected,
    login
}