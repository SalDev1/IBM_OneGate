import { FC } from "react";
import DSideBar from "../components/DSideBar";
import DNavbar from "../components/DNavBar";
import { Box } from "@mui/material";
import DMain from "../components/DMain";

const DashBoard : FC<any> = () => {
    return (
        <>
          <DNavbar />
          
          <Box sx = {{display : "flex",flexDirection:"row"}}>
            <DSideBar />
            <DMain />
          </Box>
        </>
    )
}

export default DashBoard;