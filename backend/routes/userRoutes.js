const express = require("express");
const userRouter = express.Router();
const userModel=require('../models/userModel');
const protectRoute=require('./authHelper');
const {getUser,updateUser,deleteUser}=require('../controllers/userController')
const {signup,login,protectRoute,isAuthorised,forgetpassword,resetpassword,logout}=require('../controllers/authController')

userRouter. route('/:id')
.patch(updateUser)
.delete(deleteUser)

//user key 
userRouter. route('/:id')
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/signup')
.post(signup)

userRouter
.route('/login')
.post(login)

userRouter
.route('/forgetpassword')
.post(forgetpassword)

userRouter
.route('/resetpassword/:token')
.post(resetpassword)

userRouter
.route('/logout')
.get(logout)

//profile page
app.use(protectRoute);
userRouter
.route('/userProfile')
.get(getUser)


//admin work
app.use(isAuthorised(['admin']));
userRouter
 .route('')
.get(getAllUser)


