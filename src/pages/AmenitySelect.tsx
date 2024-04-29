import {
  Card,
  Grid,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import DNavBar from "../components/DNavBar";
import DSideBar from "../components/DSideBar";

export default function AmenitySelect() {
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
          <br></br>
          <Typography variant="h5" marginLeft="3rem" display="flex">
            Amenities
          </Typography>
          <Card
            variant="outlined"
            sx={{ maxWidth: 1200, margin: 5, padding: 6 }}
          >
            <ListItemButton component="a" href="#simple-list">
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "gym",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                GYM
              </Link>
              <br></br>
            </ListItemButton>
            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "tennis",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                TENNIS
              </Link>
              <br></br>
            </ListItemButton>
            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "swimming",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                SWIMMING POOL
              </Link>
              <br></br>
            </ListItemButton>
            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "library",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                LIBRARY
              </Link>
              <br></br>
            </ListItemButton>
            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "yoga",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                YOGA
              </Link>
              <br></br>
            </ListItemButton>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
