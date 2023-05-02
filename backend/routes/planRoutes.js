const express=require("express")
const planRouter=express.Router()
const{protectRoute, isAuthorized}=require('../controllers/authController')
const {getPlan,getAllPlans,createPlan,updatePlan,deletePlan,topPlans}=require('../controllers/planController')

planRouter.route('/allPlans')
.get(getAllPlans)

//own plan
planRouter.use(protectRoute)//needs to be logged in
planRouter.route('/plan/:id')
.get(getPlan)

planRouter.use(isAuthorized(['admin','user']));
planRouter
.route('/plan')
.post(createPlan)



planRouter
.route('/plan/:id')
.patch(updatePlan)
.delete(deletePlan)

planRouter
.route('/topplans')
.get(topPlans)

module.exports=planRouter
