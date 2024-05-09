import mongoose from 'mongoose'

//schema required for validation and object representation of the document
//schema takes object as a parameter
const bookingSchema = new mongoose.Schema({ //literal style
    Id:{
        type: mongoose.Schema.Types.Number
    },
    AmenityId:{
        type: mongoose.Schema.Types.String
    },
    UserId:{
        type: mongoose.Schema.Types.String
    },
    Count:{
        type: mongoose.Schema.Types.Number
    },
    DateTime:{
        type: mongoose.Schema.Types.Date
    }
})

export default mongoose.model("bookings",bookingSchema) //decorating - Product is an alias - adding new behaviour to object
