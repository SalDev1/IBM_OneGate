import * as React from 'react';
import bg1 from '../assets/bg1.jpg'
import DNavbar from '../components/DNavBar';
import DSideBar from '../components/DSideBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Fade, Typography, Grid, Box, Paper, Link, Checkbox, FormControlLabel, TextField, CssBaseline, Button, Avatar, Hidden } from '@mui/material';
import { useSpring, animated } from "react-spring";




export default function ProfilePage({ name, address, contact, mail, profileImage }) {
    document.body.style.overflow = 'hidden'
    name = "Sanket Nayak"
    address = "Flat no 410, Ganesh Multinational Apartments, Bangalore"
    contact = "1234567890"
    mail = "sanketk7377n@gmail.com"

    const [hovered, setHovered] = React.useState(false);
    const shakingAnimation = useSpring({
      transform: hovered ? "rotate(30deg)" : "rotate(0deg)",
    });
    
  return (
    <>
    <DNavbar />
    <div style={{ display: 'flex', overflow:'hidden'}}>
    <DSideBar />
    <div style={{ display: 'flex', flexDirection: 'column', overflow : 'auto'}}>
        <div style={{ display: 'flex'}}>
            <div style={{ flex: 1}}>       
                <animated.div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={shakingAnimation }
                >
                    {profileImage ? (
                    <Avatar alt="Profile Image" src={profileImage} sx={{ ml:"15px", mt:"15px", width: '200px', height: '200px' }} />) : ( 
                    <AccountCircleIcon fontSize="large" sx={{color:"#1976D2", ml:"15px", mt:"15px", height:"200px", width:"200px"}} />)}
                </animated.div>
            </div>
            <div style={{ flex: 4}}>
                <Typography
                variant="h3"
                sx={{ color: '#1976d2', ml: "50px", mt: "80px", mb: "50px",
                transition: "transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.1)"} }}
                gutterBottom
                >
                    {name} <br />
                </Typography>
            </div>
        </div>
        <div style={{flex:1, overflow: 'auto'}}>
            <Fade in={true} timeout={1000}>
                <div style={{ overflow: 'auto' }}>
                    <Typography variant="h6" sx={{ ml: "50px", mt: "25px", lineHeight: 2.5 }}>
                        <span style={{ color: '#666', display: 'inline-block', minWidth: '130px' }}>Address :</span> {address} <br />
                        <span style={{ color: '#666', display: 'inline-block', minWidth: '130px' }}>Contact :</span> {contact} <br />
                        <span style={{ color: '#666', display: 'inline-block', minWidth: '130px' }}>Email :</span> {mail} <br />
                    </Typography>
                </div>
            </Fade>
        </div>
    </div>
  </div></>
);
};






// {/* <Fade in={true} timeout={1000}> */}
// <div style={{overflow:'auto'}}>

// </div>
// {/* </Fade> */}

