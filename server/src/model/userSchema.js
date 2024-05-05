import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    firstName : {
        type : mongoose.Schema.Types.String,
        required : "Please enter your first Name",
    },
    lastName : {
        type : mongoose.Schema.Types.String,
        requried : "Please enter your last Name",
    },
    address : {
        type : mongoose.Schema.Types.String,
        required : "Please enter your Address",
    },
    email : {
        type : mongoose.Schema.Types.String,
        required : "Please enter your Email",
    },
    phoneNo : {
        type : mongoose.Schema.Types.String,
        required : "Please enter your PhoneNo",
    },
    password : {
        type : mongoose.Schema.Types.String,
        required : "Please enter your Password",
    },
    helpDeskTickets : {
        type : mongoose.Schema.Types.Array,
        default : [],
    },
    amenitiesTickets : {
        type : mongoose.Schema.Types.Array,
        default : [],
    },
    isAdmin : {
        type : mongoose.Schema.Types.Boolean,
        required : true,
        default : false,
    }
})

const User = mongoose.model('user',userSchema);
export default User;