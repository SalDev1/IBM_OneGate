import express from "express";
import {
  getAmenities,
  addNewAmenity,
  updateExistingAmenity,
  deleteAmenity,
  getAmenityById,
} from "../controllers/amenityController.js";
const Router = express.Router();

Router.route("/").get(getAmenities);
Router.route("/:id").get(getAmenityById);
Router.route("/").post(addNewAmenity);
Router.route("/:id").put(updateExistingAmenity);
Router.route("/:id").delete(deleteAmenity);

export default Router;
