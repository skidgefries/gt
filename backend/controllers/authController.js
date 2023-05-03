const express = require("express");
const User=require('../models/userModel');
const jwt=require('jsonwebtoken');
const {sendMail}=require("../utility/nodemailer");
const {JWT_KEY}=require('../src/secrets') 


//sinup user
module.exports.signup=async function signup(req, res) {
    try{
        // console.log('req appeared')
        let dataObj = req.body;
        let user = await User.create(dataObj);
        // sendMail("signup",user)
        
        if(!user) return res.json({
            message:"error while sign up"
        });
        
        return res.json({
            message:"User Signed Up",
            data:user
        });
        
    }

    catch(err){
        console.log('here', err.message)

        return res.status(400).json({
            message:err.message
        })
    }
};

//login user

module.exports.login=async function loginUser(req, res){
    try{
        let data=req.body;
        if (data.email){
            let user=await User.findOne({email:data.email});
            if(user){
                console.log("here")
                //bcrypt -> compare
                    res.json({
                        message: "User found",
                        userDetails:data
                    });
            
                if(user.password==data.password){
                    let uid=user['_id']
                    let token=jwt.sign({payload:uid},JWT_KEY);
                    res.cookie('isLoggedIn',true,{httpOnly:true});
                    return res.json({
                        message:'user has logged in',
                        userDetails:data
                    });
                }
                else{
                return res.json({
                   message: 'wrong credentials'
                });
                }   
            }

            else{
                return res.json({
                   message: "User Not logged in"
                })
        }
    }
        else{
            return res.json({
                message:"Empty Field"
            })
        }
    }
    catch(err){
        return res.json({
            message:err.message
        })
    }
};
   
//isAuthorized to check role
module.exports.isAuthorized= function isAuthorized(role){
    return function(req,res,next){
        if(role.include(req,role)==true){
            next();
        }
        else{
            res.status(401).json({
                message:"User not authorized"
            });
        }
    }
};


//protect route
module.exports.protectRoute=async function protectRoute(req, res, next){
    try{
        let token;
        if(req.cookies.login){
            console.log(req.cookies);
            token=req.cookie.login;
            let payload=jwt.verify(token,JWT_KEY);
            if(payload){
                const user=await User.findbyId(payload);
                req.role=user.role;
                req.id=user.id; 
                next();
            }

            else{

                res.json({
                    message:"Please Login Again"
                })
            }
        }
        else{
            const client =req.get('User-Agent')
            if(client.include("Mozilla"==true)){
                return res.redirect('/login');
            }
            res.json({
                message:"please login",
            });
        }
    }
    catch(err){
        return res.json({
            message: err.message
        });
    }
};

//forget password
module.exports.forgetpassword=async function forgetpassword(req,res){
    let{email}=req.body;
    try{
        const user= await User.findOne({email:email});
        if(user){
            const resetToken=user.createResetToken();
            let resetPasswordLink=`${req.protocal}://${req.get("host")}/reserpassword/${resetToken}`;
            //send email to user
            //nodemailer
            let obj={
                resetPasswordLink:resetPasswordLink,
                email:email
            }
            sendMail("resetpassword",obj);
            return res.json({
                message:"mail sent"
            });
        }
        else{
            return res.json({
                message:"please signup"
            });
        }
    }
    catch(err){
        res.status(404).json({
            message:err.message
    });
    }
};

//reset password
module.exports.resetpassword=async function resetpassword(req,res){
    try{
        const token=req.parmas.token;
        let {password,confirmpassword}=req.body;
        const user=await User.findOne({resetToken:token});
        if(user){
            user.resetPasswordHandler(password,confirmpassword);
            await user.save();
            res.json({
                message:"password changed sucesfully"
            });
        }

        else{
            res.json({
                message:"Not a user"
            });
        }
    }

    catch(err){
        res.json({
            message:err.message
        });
    }
};


//logout
module.exports.logout=function logout(req,res){
    res.cookie('login','',{maxAge:1});
    res.json({
        message:"user logged out sucesfully"
    })
};


