const User=require("../models/userModel")

module.exports.getUser=async function getUser(req, res){
    // console. log('getUsercalled');
    let id=req.params.id;
    let user=await User. findById(id);
   if(user){
        return res.json({
            details: user
        });
    }
    else{
        return res.json({
            message: 'users not found'
        });
    }
}

// module.exports.postUsers=function postUser( req, res){
//     console. log(req.body);
//     users = req. body;
//     res. json({
//       message: "data received successfully",
//       user: req.body,
//     })
// }

module.exports.updateUsers=async function updateUser(req,res){
    // console. log(" req. body-> ", req.body);
    //update data in users obj
    
    try {
      const userId = req.params.id;
      const userDataToUpdate = req.body;
  
      const user = await User.findById(userId);
  
      if (user) {
        // Update the user object with the new data
        Object.assign(user, userDataToUpdate);
  
        // Save the updated user data
        const updatedUser = await user.save();
  
        res.json({
          message: "Account information updated successfully",
          data: updatedUser,
        });
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      console.error("Error updating account information:", error);
      res.status(500).json({ error: "Internal server error" });
 
}
}

module.exports.deleteUsers=async function deleteUser(req,res) {
            // users={}
    try{
        let id=req.params.id;
        let user=await User.
        findByIdAndDelete(id);
        if(!user){
            res.json({
                message:"user nor found"
            })
        }
        res. json({
        message: "data has been deleted",
        data:user,
        });
    }

    catch(err){
        res.json({
            message:err.message
        });
    }
}

// module.exports.getAllUser=async function getAllUser( req, res){
//     let users=await User.find();
//     if(users){
//         res. json({
//         message: 'users retrieved',
//         data:users
//         });
//     }
            

//     res. send ("user id received"); 
// }




// function setCookies(req, res){
//     // res. setHeader('Set-Cookie','isLoggedIn=true");
//    res.cookie('isLoggedIn',true,{maxAge:1000*60*60*24,secure:true, http0nly:true});
//    res.cookie('isPrimeMember', true);
//    res.send('cookies has been set')
// }

// function getCookies(req, res){
//     let cookies=req.cookies.
//     isLoggedIn;
//     console. log(cookies);
//     res. send('cookies received');
// }

module.exports.updateProfileImage=function updateProfileImage(req,res){
    res.json({
        message:'file uploaded succesfully'
    })
}
    




