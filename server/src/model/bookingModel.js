import mongoose, { Mongoose } from 'mongoose'

//schema required for validation and object representation of the document
//schema takes object as a parameter
const bookingSchema = new mongoose.Schema({ //literal style
    AmenityId:{
        type: mongoose.Schema.Types.String
    },
    UserId:{
        type: mongoose.Schema.Types.String
    },
    DateTime:{
        type: mongoose.Schema.Types.Date
    },
    monthNo : {
        type : mongoose.Schema.Types.String,
    },
    yearNo : {
        type : mongoose.Schema.Types.String,
    },
    dataNo : {
        type : mongoose.Schema.Types.String,
    },
    bookingCount : { 
        type : mongoose.Schema.Types.Number,
    }
})

export default mongoose.model("Booking",bookingSchema) //decorating - Product is an alias - adding new behaviour to object
