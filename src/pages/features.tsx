import { useState } from "react";
import React from "react";
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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import userlogs from '../assets/user_logs.png'; // Import the image
import helpdesk from '../assets/helpdesk.png';
import newsLetter from '../assets/NewsLetter.jpg';
import amenities from '../assets/amenities.jpg';

// Define your array with titles, content, and images
const featureItems: {
  title: string;
  content: string;
  image?: string | null; // Adjust the type to accept string, null, or undefined
}[] = [
  {
    title: "Logs",
    content: "Access logs and reports for your community.",
    image: userlogs, // Assuming userlogs is a valid string URL
  },
  {
    title: "Amenities",
    content: "Explore the various amenities available in your community.",
    image: amenities, // Or provide null if no image is available
  },
  {
    title : "Newsletter",
    content : "Stay updated with the latest community news, events, and announcements delivered directly to your inbox.",
    image : newsLetter,
  },
  {
    title : "HelpDesk",
    content : "Efficient ticket management and resolution for streamlined customer support.",
    image : helpdesk,
  }
];

const tableContainerSx: SxProps = {
  width: "55%",
  marginLeft: "auto",
  marginRight: "24rem",
  marginTop: 4,
  borderRadius: 6,
  overflowX: "auto", 
  position : "absolute",
  
  
};

export default function ExpandTable() {
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
                    <Typography variant="body1" onClick={() => handleTitleClick(index, item.image ?? null)} style={{ cursor: 'pointer', fontFamily: "'DM Serif Display', serif" , fontWeight : 'bold'}}>
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
                          borderRadius : 3,
                    
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
      <TableContainer component={Paper} sx = {{marginLeft : '10rem' , marginTop : '2rem' , borderRadius : 6 , boxShadow: '0px 0px 20px 2px rgba(0,0,0,0.5)', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: '0px 0px 30px 5px rgba(0,0,0,0.7)' } }}>
        {open.image && (
          <Box sx={{ textAlign: 'center', marginTop: '20px', overflow: 'hidden' }}>
            <img
              src={open.image}
              alt="Feature Image"
              style={{ width: "100%", maxWidth: "600px" , height : '18rem'  , marginRight : '9rem' , borderRadius : 6}} // Adjust maxWidth and width as needed
            />
          </Box>
        )}
      </TableContainer>
    </Box>
  </Box>
</Box>
  );
}
