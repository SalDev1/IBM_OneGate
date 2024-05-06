import Booking from '../models/bookingModel'
import Amenity from '../models/amenityModel'
import asyncHandler from 'express-async-handler'

const getBookings = asyncHandler(async (req,res) => {
    const bookings = await Booking.find({})
    res.status(200).json(bookings)
})

const getBookingById = asyncHandler(async (req,res) => {
    const id = req.params.id
    const booking = await Booking.findOne({'bookingId':id})
    res.status(200).json(booking)
})

const getBookedDates = asyncHandler(async (req,res) => {
    const { amenityId, monthNo, yearNo } = req.body
    let lastDay = new Date(yearNo, monthNo, 0).getDate()
    const bookings = await Booking.find({AmenityId:amenityId, "DateTime": {"$gte": new Date(`${yearNo}-${monthNo}-01`), "$lte": new Date(yearNo,monthNo-1,lastDay,23,59,59)}})
    const limit = (await Amenity.findById(amenityId)).Limit
    let booked = []
    if(bookings){
        let arr = new Array(lastDay).fill(0);
        bookings.forEach((e) => {
            let iDate = e.DateTime.getUTCDate()
            console.log(e.DateTime," ",iDate)
            arr[iDate-1]+=e.Count
            if(arr[iDate-1]===(12*limit)){
                booked.push(e.DateTime.toISOString().split('T')[0])
            }
        })
    }
    res.status(200).json(booked)
})


const addNewBooking = asyncHandler(async (req,res)=>{
    let newBooking = req.body
    if(!newBooking.Count || !newBooking.AmenityId || !newBooking.UserId || !newBooking.DateTime){
        res.status(400).json({msg:'Missing Fields'})
    }
    newBooking = await Booking.create(newBooking)
    res.status(201).json(newBooking)
})

export{
    getBookings,
    getBookingById,
    addNewBooking,
    getBookedDates
}