import express from "express";
import {
  getBookings,
  addNewBooking,
  getBookingById,
  getBookedDates,
} from "../controllers/bookingController.js";
const Router = express.Router();

Router.route("/").get(getBookings);
Router.route("/:id").get(getBookingById);
Router.route("/").post(addNewBooking);
Router.route("/bookedDates").post(getBookedDates);
// Router.route('/booked-dates').get(getBookedDates)

export default Router;
