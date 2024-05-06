import User from "../model/userSchema.js"
import asyncHandler from "express-async-handler";

const loginUser = asyncHandler(async (req,res) => {
    let {email,password} = req.body;

    if(!email || !password) {
        res.status(400).json({
            msg : "Please enter all the fields",
        })
    }
    const user = await User.findOne({email});

    if(user) {
        res.status(200).json({
            _id : user._id,
            firstName : user.firstName,
            lastName : user.lastName,
            email : user.email,
            contact : user.phoneNo,
            address : user.address,
            isAdmin : user.isAdmin,
        })
    } 
})

const registerUser = asyncHandler(async (req,res) => {
    let {firstName,lastName,address,email,password,phoneNo} = req.body;

    if(!firstName || !lastName || !address || !email || !password || !phoneNo) {
        res.status(400).json({
            msg : "Please enter all the fields",
        });
    }

    const userExists = await User.findOne({email});

    if(userExists) {
        res.status(500).json({
            msg : "User already exists",
        })
    }

    const user = await User.create({firstName,lastName,address,email,password,phoneNo});

    res.status(201).json({
        _id : user._id,
        firstName : user.firstName,
        lastName : user.lastName,
        address : user.address,
        email : user.email,
        phone : user.phoneNo,
    })
})

export {
    loginUser,
    registerUser,
}