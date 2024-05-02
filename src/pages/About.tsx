import React from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import Image from "../assets/about.jpg";

const AboutUs: React.FC = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          width: "100%",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{
              marginLeft: "16px",
              textAlign: "left",
              fontSize: "36px",
              fontWeight: "700",
            }}
          >
            About Us
          </Typography>

          <Typography
            sx={{
              textAlign: "justify",
              color: "black",
              justifyContent: "right",
              margin: "16px",
              fontFamily: "Inter , sans-serif",
              fontSize: "14px",
            }}
          >
            At the Apartment Security, our mission is to keep our residents
            safe. We're dedicated to providing top-notch security services that
            give you peace of mind. Our team of trained professionals uses
            cutting-edge technology to create a secure living environment. We
            value integrity, transparency, and responsiveness. Explore our
            website to learn more about how we enhance apartment living. At the
            Apartment Security, we are committed to ensuring the safety and
            well-being of our residents.
            <br />
            <br />
            Our mission is to provide top-notch security services that give you
            peace of mind. With a team of highly trained professionals,
            cutting-edge technology, and a focus on proactive measures, we
            strive to create a secure living environment for everyone. we are
            more than just a place to live; we are a community that cares. Our
            commitment to providing a comfortable and secure living environment
            is at the heart of everything we do. Explore our website to learn
            more about our services and how we can enhance your apartment living
            experience
          </Typography>
        </Box>

        <Box width="55%">
          <img src={Image} height="100vh" />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default AboutUs;
