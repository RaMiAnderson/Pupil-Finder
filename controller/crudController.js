

const helloWorld = (req, res) => {
    res.render('hello');
};

const Login = (req, res) => {
    res.render('Login');
};


    //Temporaire : alohany havitana authentification fotsiny: (Mba afahana iaccedena aminy)
    const userInterface = (req,res) => {
        res.render('UserInterface');
    };

    const adminInterface = (req , res) => {
        res.render('AdminInterface');
    };

module.exports = {
    helloWorld,
    Login,
    userInterface,
    adminInterface
};
