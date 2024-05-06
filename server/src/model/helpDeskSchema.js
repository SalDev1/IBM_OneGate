import mongoose from "mongoose";

const helpDeskSchema = mongoose.Schema({
    complaint : {
        type : mongoose.Schema.Types.String,
        required : "Please enter your complaint",
    },
    subComplaint : {
        type : mongoose.Schema.Types.String,
        required : "Please enter your sub-complaint",
    },
    description : {
        type : mongoose.Schema.Types.String,
        required : "Please enter your description",
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
    }
});

const HelpDesk = mongoose.model('helpdesktickets',helpDeskSchema);
export default HelpDesk;
