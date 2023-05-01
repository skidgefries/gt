const express = require("express");
const userModel=require('../models/userModels');
const jwt=require('jsonwebtoken');
// const {JWT_KEY}=require(../secrets);


//sinup user
module.exports.signup=async function signup(req, res) {
    try{
        let dataObj = req.body;
        let user = await userModel.create(dataObj);
        if(user){
            return res.json({
                message:"User Signed Up",
                data:user
            });
        }

        else{
            res.json({
                message:"error while sign up"
            });
        }
        // console. log( 'backend' ,user);
        res.json({
            message: "user signed up",
            data: user
        });
    }

    catch(err){
        res.json({
            message:err.message
        })
    }
}

//login user

module.exports.login=async function loginUser(req, res){
    try{
        let data=req.body;
        if (data.emai){
            let user=await userModel.findOne({email:data.email});
            if(user){
                //bcrypt -> compare
                    return res.json({
                        message: "User has logged in",
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
                   message: "User not found"
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
}
   
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
}


//protect route

model.exports.protectRoute=async function protectRoute(req, res, next){
    try{
        let token;
        if(req.cookies.login){
            console.log(req.cookies);
            token=req.cookie.login;
            let payload=jwt.verify (token,JWT_KEY);
            if(payload){
                const user=await userModel.findbyId(payload);
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
    }
    catch(err){
        return res.json({
            message: err.message
        });
    }
} 