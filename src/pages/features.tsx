import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Container,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import backgroundImage from "../assets/building.jpg";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import featureItems from "../data/features";
import BackgroundImage from "../components/parallaxImage";
import Button from "../components/button";
import NavBar from "../components/NavBar";
import HouseImage from "../assets/house.png";

const tableContainerSx: SxProps = {
  width: "90%",
  marginLeft: "auto",
  marginRight: "24rem",
  marginTop: 4,
  borderRadius: 6,
  overflowX: "auto",
  borderColor: "blue",
};

function ExpandTable() {
  const [open, setOpen] = useState<{ index: number; image: string | null }>({
    index: -1,
    image: null,
  });

  const handleTitleClick = (index: number, image: string | null) => {
    setOpen((prevOpen) => ({
      index: prevOpen.index === index ? -1 : index,
      // image: prevOpen.index === index ? null : image,
      image: null,
    }));
  };

  return (
    <Box sx={{ width: "100%", marginTop: "35px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Features in Focus
        </Typography>

        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
            width: "50%",
            paddingTop: "10px",
          }}
        >
          Our features are designed to make your community living experience
          more convenient, secure, and connected.
        </Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "50%" }}>
          <TableContainer
            // component={Paper}
            sx={{ ...tableContainerSx, backgroundColor: "#fcfcfc" }}
          >
            <Table>
              <TableHead></TableHead>
              <TableBody>
                {featureItems.map((item, index) => (
                  <React.Fragment key={item.title}>
                    {/* First Row */}
                    <TableRow>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() =>
                            handleTitleClick(index, item.image ?? null)
                          }
                        >
                          {open.index === index ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>

                      <TableCell>
                        <Typography
                          variant="body1"
                          // onClick={() =>
                          //   handleTitleClick(index, item.image ?? null)
                          // }
                          style={{
                            cursor: "pointer",
                            fontFamily: "'Inter', sans-serif",
                            fontWeight: "bold",
                            textAlign: "left",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </TableCell>
                    </TableRow>

                    {/* Second Row */}
                    <TableRow>
                      <TableCell
                        colSpan={2}
                        sx={{ paddingBottom: 0, paddingTop: 0, border: "0px" }}
                      >
                        <Collapse
                          in={open.index === index}
                          timeout="auto"
                          unmountOnExit
                        >
                          <Box
                            sx={{
                              width: "100%",
                              backgroundColor: "white",
                              minHeight: 36,
                              textAlign: "left",
                              alignItems: "left",
                              fontSize: 18,
                              borderRadius: 3,
                              padding: "10px",
                              fontFamily: "'Inter', sans-serif",
                              color: "",
                            }}
                          >
                            {item.content}
                          </Box>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box sx={{ width: "100%" }}>
          <img src={HouseImage} />
        </Box>
      </Box>
    </Box>
  );
}

const PageFeatures: React.FC = () => {
  return (
    <>
      <NavBar />
      <BackgroundImage
        imageUrl={backgroundImage}
        headerText="Experience community living at its best"
      >
        <div className="flex gap-16">
          <Button variant="active" className="scale-150" href="/signup">
            <p className="text-accent">Join Us</p>
          </Button>
          <Button variant="lightBorder" className="scale-150" href="/signup">
            Log In
          </Button>
        </div>
      </BackgroundImage>

      <Container
        maxWidth="xl"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          textAlign: "center",
        }}
      >
        <ExpandTable />
      </Container>

      <Container
        maxWidth="xl"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          textAlign: "center",
        }}
      >
        <Testimonials />
      </Container>
      <Footer />
    </>
  );
};

export default PageFeatures;
