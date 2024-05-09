import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import {
  getAllHelpDeskTickets,
  getAllHelpDeskTicketsByAdmin,
  updateHelpDeskTicket,
} from "../redux/helpdeskSlice";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import TicketsGraph from "./TicketsGraph";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { getQueries } from "../redux/querySlice";

const DMain = () => {
  const [currentHelpDeskTickets, setCurrentHelpDeskTickets] = useState<any>([]);
  const [currentQueries, setCurrentQueries] = useState<any>([]);
  const getUser: any = localStorage.getItem("user");
  const user = JSON.parse(getUser);

  console.log(user.isAdmin);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  console.log(currentHelpDeskTickets);
  console.log(currentQueries);

  useEffect(() => {
    if (user.isAdmin) {
      dispatch(getAllHelpDeskTicketsByAdmin(user))
        .unwrap()
        .then((res) => setCurrentHelpDeskTickets(res.tickets))
        .catch((error) => console.log(error));
      dispatch(getQueries(user))
        .unwrap()
        .then((res) => {
          setCurrentQueries(res);
        })
        .catch((error) => console.log(error));
    } else {
      dispatch(getAllHelpDeskTickets(user))
        .unwrap()
        .then((res) => setCurrentHelpDeskTickets(res.tickets))
        .catch((error) => console.log(error));
    }
  }, [currentHelpDeskTickets, user, currentQueries]);

  const acceptTicketHandler = (e: any, ticket: any) => {
    e.preventDefault();
    const data = {
      status: "Accepted",
      ticket: ticket,
    };

    dispatch(updateHelpDeskTicket(data))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  };

  const rejectTicketHandler = (e: any, ticket: any) => {
    e.preventDefault();

    const data = {
      status: "Rejected",
      ticket: ticket,
    };

    dispatch(updateHelpDeskTicket(data))
      .unwrap()
      .then(() => {
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(data);
  };

  return (
    <Box sx={{ marginTop: "20px", width: "100%" }}>
      <TicketsGraph />

      {/* TODO : Amenities Part */}

      {/* <Box></Box> */}

      <Box sx={{ margin: "20px 0px 0px 20px", width: "100%" }}>
        <Typography
          sx={{ fontSize: "45px", fontWeight: "600", textAlign: "left" }}
        >
          {" "}
          Your HelpDesk Tickets
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm: "auto auto",
              md: "auto auto auto",
              lg: "auto auto auto auto",
            },
            columnGap: "30px",
            rowGap: { sm: "20px", md: "0px" },
            width: "90%",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          {currentHelpDeskTickets.map((c: any) => (
            <Card
              sx={{
                width: "300px",
                height: "300px",
                border: "1px solid lighGray",
              }}
            >
              <CardContent>
                <Box>
                  <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                    {c.complaint}
                  </Typography>
                  <Typography>Place : {c.subComplaint}</Typography>
                  <Typography>{c.description}</Typography>
                </Box>

                <Box sx={{ paddingTop: "45px" }}>
                  <Typography>
                    Status : <Typography variant="h6">{c.status}</Typography>
                  </Typography>
                </Box>

                {/* Admin users gets access to these buttons */}
                {user.isAdmin && c.status === "Pending" && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "30px",
                      justifyContent: "end",
                    }}
                  >
                    <Button
                      style={{
                        backgroundColor: "lightGreen",
                        border: "none",
                      }}
                      onClick={(e) => acceptTicketHandler(e, c)}
                    >
                      <MdDone color="white" />
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "red",
                        border: "none",
                        marginLeft: "5px",
                      }}
                      onClick={(e) => rejectTicketHandler(e, c)}
                    >
                      <RxCross1 color="white" />
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box>
          {user.isAdmin && (
            <Typography
              sx={{ fontSize: "45px", fontWeight: "600", textAlign: "left" }}
            >
              {" "}
              Your Queries
            </Typography>
          )}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                sm: "auto auto",
                md: "auto auto auto",
                lg: "auto auto auto auto",
              },
              columnGap: "30px",
              rowGap: { sm: "20px", md: "0px" },
              width: "90%",
              justifyContent: "center",
              paddingTop: "20px",
            }}
          >
            {currentQueries.map((q: any) => (
              <Card
                sx={{
                  width: "300px",
                  height: "300px",
                  border: "1px solid lighGray",
                }}
              >
                <CardContent>
                  <Box>
                    <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
                      {q.name}
                    </Typography>
                    <Typography>Email: {q.email}</Typography>
                    <Typography>Subject: {q.subject}</Typography>
                  </Box>

                  <Box sx={{ paddingTop: "45px" }}>
                    <Typography>
                      Message :{" "}
                      <Typography variant="h6">{q.message}</Typography>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DMain;
