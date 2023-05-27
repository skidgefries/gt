const express = require("express");
const planRouter = express.Router();
const { protectRoute, isAuthorized } = require("../controllers/authController");
const {
  getPlan,
  getAllPlans,
  createPlan,
  updatePlan,
  deletePlan,
  topPlans,
  deleteField,
  deleteNote,
  deletePlace,
  deleteDayNote,
  deletePlacesItinerary,
  deleteNoteInPlacesItinerary,
  getPlanByUserId,
} = require("../controllers/planController");
const {validateToken}=require("../middleware/validateTokenHandler")

// planRouter.route('/allPlans')
// .get(getAllPlans)

//own plan
planRouter.use(validateToken)//needs to be logged in
planRouter.route("/plan/:id").get(getPlan);
planRouter.route("/user/plan/:id").get(getPlanByUserId);


// planRouter.use(isAuthorized(['admin','user']));
// planRouter
// .route('/plan')
// .post(createPlan)

planRouter.route("/plan").post(createPlan);

planRouter.route("/plan/:id").patch(updatePlan).delete(deletePlan);

// planRouter.route("/plan/:planId/places/:placeId").delete(deletePlace);


planRouter
.route("/plan/:planId/itinerary/:itineraryId/daynotes/:dayNoteId")
.delete(deleteDayNote);

planRouter
.route("/plan/:planId/itinerary/:itineraryId/placesitinerary/:placesItineraryId")
.delete(deletePlacesItinerary);

planRouter
  .route("/plan/:planId/itinerary/:itineraryId/placesitinerary/:placesItineraryId/notes/:noteId")
  .delete(deleteNoteInPlacesItinerary);


module.exports = planRouter;
