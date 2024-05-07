import {
  Button,
  Card,
  Grid,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ListItemIcon from '@mui/material/ListItemIcon';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import MovieIcon from '@mui/icons-material/Movie';
import ToysIcon from '@mui/icons-material/Toys';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
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
                    name: "Barbecue Area",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                <ListItemIcon>
                <OutdoorGrillIcon/>
                </ListItemIcon>
                BARBECUE AREA
              </Link>
              <br></br>
            </ListItemButton>

            <ListItemButton >
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "Bsketball Court",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                <ListItemIcon>
                <SportsBasketballIcon/>
                </ListItemIcon>
                BASKETBALL COURT
              </Link>
              <br></br>
            </ListItemButton>

            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "Children's Play Area",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                <ListItemIcon>
                <ToysIcon/>
                </ListItemIcon>
                CHILDREN'S PLAY AREA
              </Link>
              <br></br>
            </ListItemButton>

            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "Cricket Turf",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                <ListItemIcon>
                <SportsCricketIcon/>
                </ListItemIcon>
                CRICKET TURF
              </Link>
              <br></br>
            </ListItemButton>

            <ListItemButton >
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "Gym",
                    description:
                      "Fitness is almost everyone’s go-to goal to lead a healthy and happy life. For this, you require a good gym, a healthy diet, and a healthy lifestyle. Our community GYM can help you get the benefit of the first. We have plenty of equipments that provide muscle building training, better stamina, and even yoga classes along with a holistic approach for a happy mind and body.",
                    Limit:3
                  },
                }}
              >
                <ListItemIcon>
              <FitnessCenterIcon />
            </ListItemIcon>
                GYM
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
                <ListItemIcon>
                <LibraryBooksIcon/>
                </ListItemIcon>
                LIBRARY
              </Link>
              <br></br>
            </ListItemButton>

            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "Meeting Room",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                <ListItemIcon>
                <MeetingRoomIcon/>
                </ListItemIcon>
                MEETING ROOM
              </Link>
              <br></br>
            </ListItemButton>

            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "Movie Theatres",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                <ListItemIcon>
                <MovieIcon/>
                </ListItemIcon>
                MOVIE THEATRES
              </Link>
              <br></br>
            </ListItemButton>

            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "Swimming Pool",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                <ListItemIcon>
                <PoolIcon/>
                </ListItemIcon>
                SWIMMING POOL
              </Link>
              <br></br>
            </ListItemButton>
            {/* <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    id:"6637db46f91470f04c1bc2cb",
                    name:"Study Room",
                    description:"Air Conditioned room to study in",
                    Limit:2
                  },
                }}
              >
                STUDY ROOM
              </Link>
              <br></br>
            </ListItemButton> */}

            <ListItemButton>
              <Link
                to="book-amenity-date"
                state={{
                  amenity: {
                    name: "Tennis Court",
                    description:
                      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ab itaque iusto sed animi officiis, nobis laboriosam! Magni non assumenda modi, minima fugit laborum numquam qui natus.Laborum, hic quibusdam.",
                  },
                }}
              >
                <ListItemIcon>
              <SportsTennisIcon />
            </ListItemIcon>
                TENNIS COURT
              </Link>
              <br></br>
            </ListItemButton>

          </Card>
          
        </Grid>
      </Grid>
    </div>
  );
}



