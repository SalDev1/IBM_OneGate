import HelpDesk from "../model/helpDeskSchema.js";
import User from "../model/userSchema.js";
import asyncHandler from "express-async-handler";

const addHelpDeskTicket = asyncHandler(async(req,res) => {
    const {complaint , subComplaint , description , email} = req.body;

    if(!complaint || !subComplaint || !description) {
        res.status(400).json({
            msg : "Please fill all the details correctly."
        })
    }

    const user = await User.findOne({email});

    if(!user) {
        res.status(500).json({
            msg : "User doesn't exist",
        })
    }

    const userId = user._id;
    const helpDeskTicket =  await HelpDesk.create({complaint , subComplaint , description , userId});

    user.helpDeskTickets.push(helpDeskTicket._id);
    // Pushing a helpDesk Ticket into the users info.
    await User.findByIdAndUpdate(user._id, user);

    res.status(201).json({
        complaint : helpDeskTicket.complaint,
        subComplaint : helpDeskTicket.subComplaint,
        description : helpDeskTicket.description,
        userId  : helpDeskTicket.userId,
        status : helpDeskTicket.status,
    })
});

const getAllHelpDeskTicketsByUserId = asyncHandler(async(req,res) => {
    const id = req.params.id;

    const userExists = await User.find({id});
    if(!userExists) {
        res.status(500).json({
            msg : "User doesn't exists"
        })
    }
    const tickets = await HelpDesk.find({userId : id});
    res.status(200).json({
        tickets,
    });
})

const getAllHelpDeskTicketsByAdmin = asyncHandler(async(req,res) => {
    const tickets = await HelpDesk.find();
    res.status(200).json({
        tickets
    })
})

const updateHelpDeskTicket = asyncHandler(async(req,res) => {
    const id = req.params.id;
    const {status} = req.body;
    const ticket = await HelpDesk.findById(id);

    if(!ticket) {
        res.status(500).json({
            msg : "Tickets doesn't exist"
        })
    }

    ticket.status = status;
    await HelpDesk.findByIdAndUpdate(ticket._id , ticket);
    res.status(200).json({
        ticket
    })
})

export {
    addHelpDeskTicket,
    getAllHelpDeskTicketsByUserId,
    getAllHelpDeskTicketsByAdmin,
    updateHelpDeskTicket,
}