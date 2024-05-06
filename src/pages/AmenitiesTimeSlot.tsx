import { Card, Grid, Typography } from "@mui/material";
import DNavBar from "../components/DNavBar";
import DSideBar from "../components/DSideBar";
import { useLocation } from "react-router-dom";

export default function AmenitiesTimeSlot() {
  const location = useLocation();
  const { amenity } = location.state;

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
                  Booking Count
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
