import { Card, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import DNavBar from "../components/DNavBar";
import DSideBar from "../components/DSideBar";

export default function AmenityTime() {
  const location = useLocation();
  const { amenity, date, bookingCount } = location.state;
  console.log(date);
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
          <Card variant="outlined"
            sx={{ maxWidth: 1200, margin: 5, padding: 6 }}>
            <Typography>Amenity Time</Typography>
            <Typography>{amenity.name}</Typography>
            <Typography>
              Date : {`${date.$D}-${date.$M + 1}-${date.$y}`}
            </Typography>
            <Typography>Booking Count : {bookingCount}</Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
