import Amenity from '../models/amenityModel'
import asyncHandler from 'express-async-handler'

const getAmenities = asyncHandler(async (req,res) => {
    const amenities = await Amenity.find({})
    res.status(200).json(amenities)
})

const getAmenityById = asyncHandler(async (req,res) => {
    const id = req.params.id
    const amenity = await Amenity.findOne({'amenityId':id})
    res.status(200).json(amenity)
})

const addNewAmenity = asyncHandler(async (req,res)=>{
    let newAmenity = req.body
    if(!newAmenity.Name || !newAmenity.Description || !newAmenity.Limit){
        res.status(400).json({msg:'Missing Fields'})
    }
    newAmenity = await Amenity.create(newAmenity)
    res.status(201).json(newAmenity)
})

const updateExistingAmenity = asyncHandler(async (req,res)=>{
    const id = req.params.id
    const exists = Amenity.findById(id)
    if(!exists){
        res.status(404).json({msg:`Amenity ${id} does not exist`})
    }
    const amenityToBeUpdated = req.body
    const updatedAmenity = await Amenity.findByIdAndUpdate(id,amenityToBeUpdated)
    res.status(200).json(updatedAmenity)
    
})

const deleteAmenity = asyncHandler(async (req,res)=>{
    const id = req.params.id
    const amenity = await Amenity.findById(id)
    if(!amenity){
        res.status(404)
        throw new Error(`Amenity with ${id} not found`)
    }
    await amenity.deleteOne()
    res.status(200).json(`amenity deleted`)
})

export{
    getAmenities,
    getAmenityById,
    updateExistingAmenity,
    addNewAmenity,
    deleteAmenity
}