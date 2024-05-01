import { Box } from "@mui/material";
import React from "react";
import DSideBar from "../components/DSideBar";
import DNavBar from "../components/DNavBar";
import HelpDesk from "../components/HelpDesk";

const HelpDeskPage = () => {
    return (
        <>
            <DNavBar />
            
            <Box sx = {{display : 'flex' , flexDirection : "row"}}>
                <DSideBar />
                <HelpDesk />
            </Box>
        </>
    )
}

export default HelpDeskPage