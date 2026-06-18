const User = require('../models/userModel');

exports.login = async (req,res)=>{

}

exports.register = async (req,res)=>{
    try{
        const {name,email,password} = req.body();

        const exists = await User.findById({email});

        if(exists){
            return res.send(404).json({
                message: "User already exists!"
            })
        }

        const user = new User({
            name,
            email,
            password
        });

        res.status(201).json({
            message: "Registration Successfull",
            user
        });
        
    }catch(err){
        res.status(500).send({
            message: "Registration Failed. Try Again",
            error
        });
    }
}