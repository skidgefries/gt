const express=require("express")
const app=express()
const userController=require("../controllers/userController")
const router= express.Router()

router.get('/',userController.getALLDoc)

module.exports=router