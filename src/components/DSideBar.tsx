import React, { FC, useState } from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DSideBar: FC<any> = () => {
  return (
   <>
      <Box sx = {{width : "250px", height:"100vh", backgroundColor:"#1976D2", color : 'white', display:{xs:"none",md:"block"}}}>
      <Link to="/amenities/book-amenity">
        <Typography sx = {{p : 2 , ":hover":{backgroundColor : "#165ea6"}, cursor:'pointer'}}>Amenities</Typography>
      </Link>
        
        <Typography sx = {{p : 2 , ":hover":{backgroundColor : "#165ea6"}, cursor:'pointer'}}>Help Desk</Typography>
      </Box>
   </>
  )
}

export default DSideBar;