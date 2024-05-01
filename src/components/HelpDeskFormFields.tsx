import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import complaints from "../data/complaints";
import { BorderColor } from "@mui/icons-material";

const HelpDeskFormFields : FC<any> = (props:any) => {
    const currentStep = props.step;

    useEffect(() => {
        const newSubComplaints = complaints.filter((c) => c.complaint === props.complaint);
        props.setCurrentSubComplaints(newSubComplaints);
    } , [props.complaint]);

    // console.log(props.currentSubComplaints[0].subComplaints);

    return  (
       <Box width = "100%" sx = {{display : "flex" , flexDirection:"column" , justifyContent:"start"}}>
         {currentStep === 1 ? (          
            <>
            <Typography sx = {{fontSize:"48px"}}>Please Specify your Problem</Typography>
            <FormControl sx = {{marginTop:"25px"}}>
                <InputLabel id="demo-simple-select-label">Complaint</InputLabel>
                <Select 
                  label = "Complaint"
                  labelId="demo-simple-select-label"
                  sx = {{width : "400px"}} 
                  onChange={(e:any) => {props.setComplaint(e.target.value as string)}}
                >
                    {complaints.map((c:any) => (
                        <MenuItem id= {c.complaint} value = {c.complaint}>{c.complaint}</MenuItem>
                    ))}
                </Select>
            </FormControl>


            <FormControl sx = {{marginTop:"25px"}}>
                <InputLabel id="demo-simple-select-label">Sub Complaint</InputLabel>
                <Select 
                  label = "Complaint"
                  labelId="demo-simple-select-label"
                  sx = {{width : "400px"}} 
                  onChange={(e:any) => {props.setSubComplaint(e.target.value as string)}}
                >
                    {props.currentSubComplaints[0]?.subComplaints.map((c:any) => (
                        <MenuItem id= {c} value = {c}>{c}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            </>  
        ) : (
            <>
              {currentStep === 2 ? (
              <>
                <Typography sx = {{fontSize:"48px" , paddingBottom:"20px"}} >Any Comments ?</Typography>
                <TextareaAutosize minRows={6} onChange={(e:any) => {props.setDescription(e.target.value as string)}} />
              </>) : (<></>)} 
            </>
         )} 
       </Box>
    )
}
export default HelpDeskFormFields