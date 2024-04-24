// src/components/AboutUs.tsx
import React from 'react';
import { Container, Typography, } from '@mui/material';


const AboutUs: React.FC = () => {
  return (
    <Container>
      <Typography variant = "h2" component = "h5" gutterBottom sx = {{textAlign:'center',color:'white',marginTop : "-1090px" , fontSize : '4rem' , fontWeight : 'bold'}}>About Us</Typography>
    
    <Typography variant="h5" component="h2" gutterBottom sx ={{
      textAlign : 'left',
      marginTop : '1090px',
      marginBottom:'20px',
      color : 'black' , 
      justifyContent : 'right',
      marginLeft : '18px',
      fontFamily : 'Inter , sans-serif',

    }}>
     
    

    At the Apartment Security, our mission is to keep our residents safe. We're dedicated to providing top-notch security services that give you peace of mind. Our team of trained professionals uses cutting-edge technology to create a secure living environment. We value integrity, transparency, and responsiveness. Explore our website to learn more about how we enhance apartment living.


    At the Apartment Security, we are committed to ensuring the safety and well-being of our residents. Our mission is to provide top-notch security services that give you peace of mind. With a team of highly trained professionals, cutting-edge technology, and a focus on proactive measures, we strive to create a secure living environment for everyone. we are more than just a place to live; we are a community that cares. Our commitment to providing a comfortable and secure living environment is at the heart of everything we do. Explore our website to learn more about our services and how we can enhance your apartment living experience
  </Typography>
  </Container>

  

  
 
  
  );


}





export default AboutUs;

