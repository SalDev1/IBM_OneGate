import mongoose from "mongoose";

//schema required for validation and object representation of the document
//schema takes object as a parameter
const AmenitySchema = new mongoose.Schema({
  name: { type: mongoose.Schema.Types.String },
  description: { type: mongoose.Schema.Types.String },
  Limit: { type: mongoose.Schema.Types.String },
});

const bookingSchema = new mongoose.Schema({
  //literal style
  amenity: {
    type: AmenitySchema,
  },
  userId: {
    type: mongoose.Schema.Types.String,
  },
  dateTime: {
    type: mongoose.Schema.Types.Date,
  },
  monthNo: {
    type: mongoose.Schema.Types.String,
  },
  yearNo: {
    type: mongoose.Schema.Types.String,
  },
  dataNo: {
    type: mongoose.Schema.Types.String,
  },
  bookingCount: {
    type: mongoose.Schema.Types.Number,
  },
});

export default mongoose.model("Booking", bookingSchema); //decorating - Product is an alias - adding new behaviour to object
