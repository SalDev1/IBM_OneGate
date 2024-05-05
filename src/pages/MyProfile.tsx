import * as React from 'react';
import DNavbar from '../components/DNavBar';
import DSideBar from '../components/DSideBar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Fade, Typography, Avatar } from '@mui/material';
import { animated } from "react-spring";
import Image from "../assets/avatar_1.jpg";

const ProfilePage = () => {
    document.body.style.overflow = 'hidden'

    const getUser : any = localStorage.getItem('user')
    const user = JSON.parse(getUser);

    const [hovered, setHovered] = React.useState(false);

    // const shakingAnimation = useSpring({
    //   transform: hovered ? "rotate(30deg)" : "rotate(0deg)",
    // });
    
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
                   // style={shakingAnimation }
                    >
                        {user.profileImage ? (
                        <Avatar alt="Profile Image" src={user.profileImage} sx={{ ml:"15px", mt:"15px", width: '200px', height: '200px' }} />) : ( 
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
                        {user.firstName} <br /> {user.lastName}
                    </Typography>
                </div>
            </div>
            <div style={{flex:1, overflow: 'auto'}}>
                <Fade in={true} timeout={1000}>
                    <div style={{ overflow: 'auto' }}>
                        <Typography variant="h6" sx={{ ml: "50px", mt: "25px", lineHeight: 2.5 }}>
                            <span style={{ color: '#666', display: 'inline-block', minWidth: '130px' }}>Address :</span> {user.address} <br />
                            <span style={{ color: '#666', display: 'inline-block', minWidth: '130px' }}>Contact :</span> {user.contact} <br />
                            <span style={{ color: '#666', display: 'inline-block', minWidth: '130px' }}>Email :</span> {user.email} <br />
                        </Typography>
                    </div>
                </Fade>
            </div>
        </div>
    </div>
  </>
 );
};

export default ProfilePage
// {/* <Fade in={true} timeout={1000}> */}
// <div style={{overflow:'auto'}}>

// </div>
// {/* </Fade> */}

