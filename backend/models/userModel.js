const mongoose = require("mongoose")
const emailValidator=require("email-validator")
const bcrypt=require('bcrypt')
const str= ("mongodb+srv://pranawrajkafleprk:HaaSoDXOAxWdgyNe@cluster0.hpybsct.mongodb.net/GuidedTravels")
const crypto=require('crypto')

mongoose.connect(str)
//mongoose.connect("mongodb://0.0.0.0:27017/LoginSignUp") //connect node to mongodb //LoginSignup->name of database
.then(()=>{
    console.log("userdb connected");
})
.catch((err)=>{
    console.log(`failed to connect : ${err}`);
})

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
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

const userModel=mongoose.model('userModel',userSchema);
module.exports=userModel;
  
