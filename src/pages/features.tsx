import React, { useState } from "react";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  SxProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Container, Button
} from '@mui/material';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import userLogs from '../assets/userLogs.png'; // Import the image
import helpDesk from '../assets/helpDesk.png';
import newsLetter from '../assets/NewsLetter.jpg';
import amenities from '../assets/amenities.jpg';
import MaterialHeader from "../components/header";
import { Parallax } from 'react-parallax';
import backgroundImage from '../assets/building.jpg';
import gray from '../assets/gray.jpg';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';


// Define your array with titles, content, and images
const featureItems: {
  title: string;
  content: string;
  image?: string | null; // Adjust the type to accept string, null, or undefined
}[] = [
    {
      title: "Logs",
      content: "Access logs and reports for your community.",
      image: userLogs, // Assuming userLogs is a valid string URL
    },
    {
      title: "Amenities",
      content: "Explore the various amenities available in your community.",
      image: amenities, // Or provide null if no image is available
    },
    {
      title: "Newsletter",
      content: "Stay updated with the latest community news, events, and announcements delivered directly to your inbox.",
      image: newsLetter,
    },
    {
      title: "HelpDesk",
      content: "Efficient ticket management and resolution for streamlined customer support.",
      image: helpDesk,
    }
  ];

const tableContainerSx: SxProps = {
  width: "55%",
  marginLeft: "auto",
  marginRight: "24rem",
  marginTop: 4,
  borderRadius: 6,
  overflowX: "auto",
  position: "absolute",


};

function ExpandTable() {
  const [open, setOpen] = useState<{ index: number; image: string | null }>({ index: -1, image: null });

  const handleTitleClick = (index: number, image: string | null) => {
    setOpen((prevOpen) => ({
      index: prevOpen.index === index ? -1 : index,
      image: prevOpen.index === index ? null : image,
    }));
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: "center", fontWeight: 'bold', marginLeft: '25rem', fontFamily: "Inter', sans-serif" }}>
        Features in Focus
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 500, textAlign: "center", marginBottom: 2, marginLeft: '25rem', fontFamily: "'Inter', sans-serif" }}>
        Our features are designed to make your community living experience more convenient, secure, and connected.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '35%' }}>
          <TableContainer component={Paper} sx={{ ...tableContainerSx, backgroundColor: "#EAEAEA" }}>
            <Table>
              <TableHead></TableHead>
              <TableBody>
                {featureItems.map((item, index) => (
                  <React.Fragment key={item.title}>
                    <TableRow>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => handleTitleClick(index, item.image ?? null)}
                        >
                          {open.index === index ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" onClick={() => handleTitleClick(index, item.image ?? null)} style={{ cursor: 'pointer', fontFamily: "'DM Serif Display', serif", fontWeight: 'bold' }}>
                          {item.title}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2} sx={{ paddingBottom: 0, paddingTop: 0, border: '0px' }}>
                        <Collapse in={open.index === index} timeout="auto" unmountOnExit>
                          <Box
                            sx={{
                              width: "100%",
                              backgroundColor: 'white',
                              minHeight: 36,
                              textAlign: 'left',
                              alignItems: 'left',
                              fontSize: 18,
                              fontFamily: "'DM Serif Display', serif",
                              borderRadius: 3,

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
        <Box sx={{ width: '30%' }}>
          <TableContainer component={Paper} sx={{ marginLeft: '10rem', marginTop: '2rem', borderRadius: 6, boxShadow: '0px 0px 20px 2px rgba(0,0,0,0.5)', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0px 0px 30px 5px rgba(0,0,0,0.7)' } }}>
            {open.image && (
              <Box sx={{ textAlign: 'center', marginTop: '20px', overflow: 'hidden' }}>
                <img
                  src={open.image}
                  alt="Feature Image"
                  style={{ width: "100%", maxWidth: "600px", height: '18rem', marginRight: '9rem', borderRadius: 6 }} // Adjust maxWidth and width as needed
                />
              </Box>
            )}
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};


const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '/contact' },
];

interface BackgroundImageProps {
  imageUrl: string;
  headerText: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  headerText,
}) => {
  return (
    <Parallax
      bgImage={imageUrl}
      strength={400}
      style={{
        height: '150vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // filter: 'brightness(50%)',
        // opacity: '0.8',
      }}
    >
      <div style={{ height: '100vh' }}>
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            height: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Typography component for the header text */}
          <Typography variant="h3" component="h1" gutterBottom style={{ opacity: 1.6, transform: 'translateY(30%)' }}>
            {headerText}
          </Typography>
          {/* Typography component for the additional text */}
          <Typography variant="h2" gutterBottom sx={{
            color: 'white',
            fontWeight: 'bolder',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '150px',
          }}>
            Experience community living at its best
          </Typography>
          {/* Button component for the login call-to-action */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              position: 'absolute',
              right: '150px',
              bottom: '208px',
              bgcolor: '#323EDD',
              color: 'white',
              whiteSpace: 'nowrap' // Set white-space to nowrap
            }}
            href="/login"
          >
            JOIN US
          </Button>

        </Container>
      </div>
    </Parallax>
  );
};


const Features: React.FC = () => {
  function handleLoginClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <MaterialHeader title="OneGate" links={links} onLoginClick={handleLoginClick} />
      <BackgroundImage imageUrl={backgroundImage} headerText="" />
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${gray})`, // Corrected syntax to set the background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          textAlign: 'center',
        }}
      >
        <PageFeatures />
      </Container>
      <Testimonials />
      <Footer />
    </div>
  );
};


const PageFeatures: React.FC = () => {
  function handleLoginClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <MaterialHeader title="OneGate" links={links} onLoginClick={handleLoginClick} />
      <BackgroundImage imageUrl={backgroundImage} headerText="" />
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${gray})`, // Corrected syntax to set the background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          textAlign: 'center',
        }}
      >
        <Features />
      </Container>
    </div>
  );
};
export default Features
