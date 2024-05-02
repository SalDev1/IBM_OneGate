import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import testimonials from '../data/testimonials';
import { Box, Container } from '@mui/material';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// const TestimonialsContainer = styled('div')({
//   display: 'flex',
//   overflowX: 'auto',
//   gap: '4rem',
//   marginTop: '5rem',
//   position: 'relative',
//   '&::-webkit-scrollbar': {
//     display: 'none',
//   },
//   '-ms-overflow-style': 'none',
//   scrollbarWidth: 'none',
// });

// const Slider = styled('div')({
//   position: 'absolute',
//   marginTop: '10rem', // Fixed typo here
//   transform: 'translateY(-50%)',
//   display: 'flex',
//   alignItems: 'center',
//   cursor: 'pointer',
//   zIndex: 1,
// });


export default function Testimonials() {
  // const testimonialsRef = React.useRef<HTMLDivElement | null>(null);

  // const scrollLeft = () => {
  //   if (testimonialsRef.current) {
  //     testimonialsRef.current.scrollBy({
  //       left: -300,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // const scrollRight = () => {
  //   if (testimonialsRef.current) {
  //     testimonialsRef.current.scrollBy({
  //       left: 300,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  return (
    <Container sx = {{color : "white",padding:"20px 0px"}}>
      <Typography variant="h2" component="div" align="center" sx={{ textAlign: "center", fontWeight: 'bold', fontFamily: "Inter, sans-serif", marginTop: '2rem' }}>
        Testimonials
      </Typography>

        <Box sx = {{display:"grid", gridTemplateColumns:{sm:"auto",md:"auto auto",lg:"auto auto auto"}, justifyContent : "center",gridGap:"18px" , marginTop : "15px" , overflow:"hidden"}}>
       
        {testimonials.map((testimonial, index) => (
          
          <Card key={index} sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.01)' } , width : "325px" , height : "270  px"}}>
            <CardContent sx = {{display:"flex", flexDirection:"column", alignItems:"center", justifyContent: "center"}}>

              <Avatar sx={{ backgroundImage:"contain"}} src={testimonial.avatar}/>
              
              <Typography sx = {{mt:1}}>{testimonial.name}</Typography>

              <Rating
                name="read-only"
                value={testimonial.rating}
                readOnly
                sx={{ mt: 1 , fontSize:"1.2rem"}}
              />
              
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 , textAlign:"center" }}>
                {testimonial.review}
              </Typography>
              
            </CardContent>
          </Card>
        ))}
        </Box>
    </Container>
  );
}
