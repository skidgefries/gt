const express = require("express");
const userRouter = express.Router();
const multer = require("multer");
const User = require("../models/userModel");
const {
  getUser,
  updateUsers,
  deleteUsers,
  getAllUser,
  updateProfileImage,
} = require("../controllers/userController");

const {
  signup,
  login,
  protectRoute,
  isAuthorized,
  forgetpassword,
  resetpassword,
  logout,
} = require("../controllers/authController");
const { index } = require("../models/planModel");

// const {validateToken} = require("../middleware/validateTokenHandler");


// userRouter.route("/:id").patch(updateUsers).delete(deleteUsers);

//user key
// userRouter.route("/:id")
// .patch(updateUsers)   //done
// .delete(deleteUsers); //done


//public
userRouter.route("/signup").post(signup);  //done

userRouter.route("/forgetpassword").post(forgetpassword);

userRouter.route("/resetpassword/:token").post(resetpassword);

userRouter.route("/login").post(login);  //done


//protected

// userRouter.use(validateToken)

userRouter.route("/logout",validateToken).get(logout);

// userRouter.route("/userProfile/:id",validateToken).get(getUser);

userRouter.route("/userProfile/:id")
.patch(updateUsers)   //done
.delete(deleteUsers)//done
.get(getUser);

// //multer for fileupload
// const multerStorage=multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'../image')
//     },
//     filename:function(req,file,cb){
//         cb(null,`user-${Date.now()}.png`)
//     }
// })

// const filter = function (req, file, cb) {
//     if (file.mimetype.startsWith("image")){
//      cb(null, true)
//     } else {
//      cb(new Error("Not an Image! Please upload an image"), false)
//     }
// }

// const upload = multer({
//     storage: multerStorage,
//    fileFilter: filter
// })

// //multer
// userRouter.post("/ProfileImage",upload.single('photo')),updateProfileImage);
// //get request
// userRouter.get('/ProfileImage',(req,res)=>{
//     res.sendFile("/Users/")
// })

//profile page
// app.use(protectRoute);



module.exports = userRouter;
