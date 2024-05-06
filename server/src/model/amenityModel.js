import mongoose from 'mongoose'

//schema required for validation and object representation of the document
//schema takes object as a parameter
const amenitySchema = new mongoose.Schema({ //literal style
    Id:{
        type: mongoose.Schema.Types.Number
    },
    Name:{
        type: mongoose.Schema.Types.String
    },
    Description:{
        type: mongoose.Schema.Types.String
    },
    Limit:{
        type: mongoose.Schema.Types.Number
    }
})

export default mongoose.model("Amenity",amenitySchema) //decorating - Product is an alias - adding new behaviour to object
