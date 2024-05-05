import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { getAllHelpDeskTickets } from "../redux/helpdeskSlice";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import TicketsGraph from "./TicketsGraph";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Button from "./button";

const DMain = () => {
    const [currentHelpDeskTickets , setCurrentHelpDeskTickets] = useState<any>([]);
    const getUser : any = localStorage.getItem('user')
    const user = JSON.parse(getUser);
    const dispatch = useDispatch<AppDispatch>();

    console.log(currentHelpDeskTickets);

    useEffect(() => {
        dispatch(getAllHelpDeskTickets(user))
          .unwrap()
          .then((res) => setCurrentHelpDeskTickets(res.tickets))
          .catch((error) => console.log(error))
    },[])

    return (
        <>
            <Box sx = {{marginTop:"20px" , width : "100%"}}>
                <TicketsGraph />

                 {/* TODO : Amenities Part */}

                 {/* <Box></Box> */}

                <Box sx = {{margin : "20px 0px 0px 20px" , width : "100%"}}>
                    <Typography sx = {{fontSize : "45px", fontWeight:"600" , textAlign:"left"}}> Your HelpDesk Tickets</Typography>
                   
                    <Box sx = {{display : "grid" , gridTemplateColumns : {sm : "auto auto" , md : "auto auto auto" , lg : "auto auto auto auto"} , columnGap : "30px", rowGap : {sm : "20px", md : "0px"} , width : "90%" , justifyContent : "center" , paddingTop : "20px"}}>
                        {currentHelpDeskTickets.map((c:any) => (
                            <Card sx = {{width : "300px",height:"300px" , border:"1px solid lighGray"}}>
                                 <CardContent>
                                    <Box>
                                        <Typography sx = {{fontSize : "24px" , fontWeight : "600"}}>{c.complaint}</Typography>
                                        <Typography>Place : {c.subComplaint}</Typography>
                                        <Typography>{c.description}</Typography>
                                    </Box>

                                    <Box sx = {{paddingTop : "45px"}}>
                                        <Typography>Status : <Typography variant="h6">None</Typography></Typography>
                                    </Box>

                                    {/* Admin users gets access to these buttons */}
                                    <Box sx = {{display : "flex" , alignItems :"center" , marginTop : "30px", justifyContent:"end"}}>
                                        <Button style={{backgroundColor : "lightGreen" ,border:"none"}}><MdDone color="white"/></Button>
                                        <Button style={{backgroundColor : "red" , border:"none" , marginLeft : "5px"}}><RxCross1 color = "white"/></Button>
                                    </Box>
                                 </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DMain;