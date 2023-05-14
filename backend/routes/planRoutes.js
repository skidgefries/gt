const express = require("express");
const planRouter = express.Router();
const { protectRoute, isAuthorized } = require("../controllers/authController");
const {
  getPlan,
  getAllPlans,
  suruko,
  createPlan,
  updatePlan,
  deletePlan,
  topPlans,
  deleteField,
  deleteNote,
  deletePlace,
  deleteDayNote,
  deletePlacesItinerary,
} = require("../controllers/planController");

planRouter.route("/plan/:id").get(getPlan);

planRouter.route("/suruko").post(suruko);
planRouter.route("/plan").post(createPlan);



planRouter.route("/plan/:id").patch(updatePlan).delete(deletePlan);

planRouter.route("/plan/:planId/places/:placeId").delete(deletePlace);

planRouter
  .route("/plan/:planId/places/:placeId/notes/:noteId")
  .delete(deleteNote);

planRouter
  .route("/plan/:planId/itinerary/:itineraryId/daynotes/:dayNoteId")
  .delete(deleteDayNote);

planRouter
  .route("/plan/:planId/itinerary/:itineraryId/placesitinerary/:placesItineraryId")
  .delete(deletePlacesItinerary);

module.exports = planRouter;
