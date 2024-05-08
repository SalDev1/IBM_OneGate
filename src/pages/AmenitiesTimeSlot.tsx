import { Card, Grid, Typography } from "@mui/material";
import DNavBar from "../components/DNavBar";
import DSideBar from "../components/DSideBar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import _ from "lodash";
import { Button } from "@mui/material";
import ThemedButton from "../components/button";
import { useShallow } from "zustand/react/shallow";
import dayjs from "dayjs";
import useAmenitiesStore from "../redux/amentiySlice";
import Amenity from "../types/Amenity";
import axios from "axios";

const bookedTimeSlots = [
  {
    from: 5,
    to: 6,
  },
  {
    from: 12,
    to: 14,
  },
  {
    from: 18,
    to: 19,
  },
  {
    from: 10,
    to: 11,
  },
];

export default function AmenitiesTimeSlot() {
  const { amenity, bookingCount, date } = useLocation().state;
  const [selectedTimeSlot, setSelectedTimeSlot] = useAmenitiesStore(
    useShallow((state) => [state.timeSlot?.from ?? null, state.setTimeSlot])
  );
  const [
    setUserId,
    setAmenity,
    setBookingCount,
    setDateNo,
    setMonthNo,
    setYearNo,
  ] = useAmenitiesStore(
    useShallow((state) => [
      state.setUserId,
      state.setAmenity,
      state.setBookingCount,
      state.setDateNo,
      state.setMonthNo,
      state.setYearNo,
    ])
  );
  const storeData = useAmenitiesStore(
    useShallow((state) => ({
      userId: state.userId,
      amenity: state.amenity,
      monthNo: state.monthNo,
      yearNo: state.yearNo,
      dateNo: state.dateNo,
      timeSlot: state.timeSlot,
      bookingCount: state.bookingCount,
    }))
  );

  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("user") ?? `{}`)?._id);
    setAmenity(amenity as Amenity);
    setBookingCount(bookingCount);
    setDateNo(date.$D);
    setMonthNo(date.$M);
    setYearNo(date.$y);
  }, []);

  const handleSubmit = () => {
    const data = JSON.stringify(storeData, null, 2);
    console.log("Posting Data: " + data);
    axios.post("http://localhost:4000/amenities", data);
  };

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
          <br />
          <Typography variant="h5" marginLeft="3rem" display="flex">
            Select Time Slot
          </Typography>
          <Card sx={{ maxWidth: 1200, margin: 5, padding: 6 }}>
            <Grid
              container
              rowSpacing={2}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight="bold"
                >
                  {amenity.name}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight="bold" color="grey">
                  Description
                </Typography>
                <Typography color="grey">{amenity.description}</Typography>
                <br></br>
                <Typography fontWeight="bold" color="grey">
                  Free
                </Typography>
                <br></br>
                <Typography fontWeight="bold" color="grey">
                  Booking Count : {bookingCount}
                </Typography>
                <br></br>
                <Typography fontWeight="bold" color="grey">
                  Date : {`${date.$D}-${Number(date.$M + 1)}-${date.$y}`}
                </Typography>
                <br></br>
                {selectedTimeSlot !== undefined &&
                  selectedTimeSlot !== null && (
                    <Typography
                      sx={{ color: "#0022Ff" }}
                      fontWeight="bold"
                      color="grey"
                    >
                      Selected Time Slot: {selectedTimeSlot}:00 to{" "}
                      {selectedTimeSlot + 1}:00
                    </Typography>
                  )}
                <Button
                  variant="contained"
                  className="mt-4"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Grid>
              <Grid padding={4}>
                {_.range(0, 23).map((time) => {
                  let isBooked = false;
                  bookedTimeSlots.forEach((slot) => {
                    if (time >= slot.from && time < slot.to) isBooked = true;
                  });
                  return (
                    <ThemedButton
                      key={time}
                      variant={
                        isBooked
                          ? "inactive"
                          : selectedTimeSlot == time
                          ? "primary"
                          : "secondary"
                      }
                      className={`mb-4 ${
                        isBooked ? "bg-red-50" : "hover:scale-110"
                      }`}
                      onClick={() => {
                        if (!isBooked) setSelectedTimeSlot(time);
                      }}
                    >
                      {time}:00 to {time + 1}:00{" "}
                      {isBooked && (
                        <span className="font-bold mx-2">Unavailable</span>
                      )}
                    </ThemedButton>
                  );
                })}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
