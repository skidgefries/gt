const mongoose = require("mongoose")
const emailValidator=require("email-validator")
const bcrypt=require('bcrypt')
const crypto=require('crypto')
const dotenv = require('dotenv')



const userSchema=mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:false,
        ref:'User'
    },

    name:{
        type:String,
        required:true,
    },
    
    username: {
        type: String, 
        required: true, 
        unique: true
    },
    
    email:{
        type:String,
        required:true,
        unique: true,
        validate: function (){
            return emailValidator.validate(this.email);
        }
    },
    
    password:{
        type:String,
        required: true,
        minLength:8,
    },

    confirmPassword:{
        type:String,
        required: true,
        minLength:8,
        validate: function (){
            return this. confirmPassword==this.password
        }
    },

    role:{
        type: String,
        enum: ['admin','user'],
        default: 'user'
    },
    
    profileImage:{
        type:String,
        default:'../image/defaultuser.png'
    },

    resetToken:String
});



userSchema.pre('save',function(){
    this.confirmPassword=undefined;
});

userSchema.methods.createResetToken=function(){
    //creating unique token
    const resetToken=crypto.randomBytes(32).toString("hex");
    this.resetToken=resetToken;
    return resetToken;
}

userSchema.methods.resetPasswordHandler=function(password,confirmPassword){
    this.password=password;
    this.confirmPassword=confirmPassword;
    this.resetToken=undefined;
}

// const userModel=mongoose.model('userModel',userSchema);

const User = mongoose.model("User", userSchema)
module.exports=User;

  
