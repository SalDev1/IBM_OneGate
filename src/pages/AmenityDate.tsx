import { useLocation, Link } from "react-router-dom";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState, useEffect } from "react";
import React from "react";
import {
  Button,
  Card,
  Grid,
  Typography,
 
} from "@mui/material";
import DNavBar from "../components/DNavBar";
import DSideBar from "../components/DSideBar";

export default function AmenityDate() {
  //react code
  const [blackoutDates, setBlackoutDates] = useState([
    "2024-04-01",
    "2024-04-08",
    "2024-04-13",
    "2024-04-22"
])
const [value, setValue] = useState<Dayjs | null>(blackoutDates.includes((dayjs(new Date())).toISOString().split('T')[0])?null:dayjs(new Date()))
const [bookingCount, setBookingCount] = useState(1)
const location = useLocation()
const {amenity} = location.state

const handleCalendarChange = (newValue:Dayjs) => {
    setValue(newValue)
}

const handleChange = (event:React.ChangeEvent) => {
    if(Number((event.target as HTMLInputElement).value)>=1 && Number((event.target as HTMLInputElement).value)<=5){
        setBookingCount(Number((event.target as HTMLInputElement).value))
        setBlackoutDates([
            "2024-04-05",
            "2024-04-11",
            "2024-04-18",
            "2024-04-30"
        ])
    }
        
}

const isDisabled = (d:Dayjs) => {
    d=d.add(1,'day')
    return blackoutDates.includes(d.toISOString().split('T')[0]) || d.isBefore(dayjs(new Date()));
}

useEffect(() => {
    if(value===null){
        document.getElementById('date-link')?.classList.add('disabled-link')
    }
    else{
        document.getElementById('date-link')?.classList.remove('disabled-link')
    }
},[value])

useEffect(()=>{
    if(value && blackoutDates.includes(value.toISOString().split('T')[0])){
        console.log("getting in")
        setValue(null)
    }
},[blackoutDates])

  return (
    <div style={{ backgroundColor: "#F6F5F2" }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={12}>
  <DNavBar />

  </Grid>
  <Grid item xs={2}>
  <DSideBar />

  </Grid>
  <Grid item xs={10}>
  {/* <Typography variant="h6" color="grey" display="flex">
        Amenities / Amenity Date
      </Typography> */}
      <br></br>
      <Typography variant="h5" marginLeft="3rem" display="flex">Booking Amenity</Typography>
      <Card sx={{ maxWidth: 1200,margin:5,padding:6}} >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
              {amenity.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontWeight="bold" color="grey">Description</Typography>
            <Typography color="grey">
              {amenity.description}
            </Typography>
            <br></br>
            <Typography fontWeight="bold" color="grey">Free</Typography>
            <br></br>
            <Typography fontWeight="bold" color="grey">Booking Count</Typography>
            <input
              type="number"
              value={bookingCount}
              onChange={handleChange}
            ></input>
          </Grid>
          <Grid item xs={6} textAlign="center" >
            <LocalizationProvider dateAdapter={AdapterDayjs} >
              <DemoContainer components={["DateCalendar", "DateCalendar"]} sx={{alignItems:"center",justifyContent:"center",margin:"auto"}} >
                <DemoItem sx={{width:"20rem"}}>
                  <DateCalendar shouldDisableDate={isDisabled}
                   onChange={handleCalendarChange} onMonthChange={()=>setValue(null)}
                   sx={{
                    maxWidth:"60rem"
                  }}
                    value={value}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
            <Button id='date-link' sx={{
              alignItems:"center",
              justifyContent:"center",
              float:"inherit"
            }}>
            <Link
              to="/amenities/book-amenity/book-amenity-time"
              state={{ amenity, bookingCount, date: value }}
            >
              Select Timeslot
            </Link>
            </Button>
            
            <br></br>
          </Grid>
        </Grid>
      </Card>
  </Grid>
</Grid>
      
    </div>
  );
}