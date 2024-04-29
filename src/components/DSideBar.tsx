import React, { FC, useState } from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const DSideBar: FC<any> = () => {
  return (
   <>
      <Box sx = {{width : "250px", height:"100vh", backgroundColor:"#fafafa", color : '#6978ff', display:{xs:"none",md:"block"} , borderRight:"1px solid #f0f0f0", fontFamily: "'Inter', sans-serif"}}>
        <Typography sx = {{p : 2 , ":hover":{backgroundColor : "#001aff" , color : "white"}, cursor:'pointer'}}>
            <Link to="/dashboard/amenities">
                Amenities
            </Link> 
        </Typography>

        <Typography sx = {{p : 2 , ":hover":{backgroundColor : "#001aff" , color : "white"}, cursor:'pointer'}}>
            <Link to="/dashboard/helpdesk">
                HelpDesk
            </Link> 
        </Typography>
   </>
  )
}

export default DSideBar;