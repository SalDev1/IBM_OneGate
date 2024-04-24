import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import testimonials from '../data/testimonials';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const TestimonialsContainer = styled('div')({
  display: 'flex',
  overflowX: 'auto',
  gap: '4rem',
  marginTop: '5rem',
  padding: '1rem 2rem', // Added padding to create space for icons
  position: 'relative',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',
});

const Slider = styled('div')({
  position: 'absolute',
  marginTop: '10rem', // Fixed typo here
  transform: 'translateY(-50%)',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  zIndex: 1,
});


export default function Testimonials() {
  const testimonialsRef = React.useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <Typography variant="h2" component="div" align="center" sx={{ textAlign: "center", fontWeight: 'bold', fontFamily: "Inter, sans-serif", marginTop: '2rem' }}>
        Testimonials
      </Typography>

      <TestimonialsContainer ref={testimonialsRef}>
        {testimonials.map((testimonial, index) => (
          <Card key={index} sx={{ maxWidth: 345, height: '14rem', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
            <CardContent>
              <Avatar sx={{ bgcolor: red[500], width: 56, height: 56, fontSize: 24, marginLeft: '8rem' }}>
                {testimonial.avatar}
              </Avatar>
              <Rating
                name="read-only"
                value={testimonial.rating}
                readOnly
                sx={{ mt: 2, marginLeft: '6rem' }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                {testimonial.review}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </TestimonialsContainer>

      {/* <Slider onClick={scrollLeft} style={{ left: 4, marginTop: '15rem' }}>
        <NavigateBeforeIcon />
      </Slider> */}
      {/* <Slider onClick={scrollRight} style={{ right: 10, marginTop: '15rem' }}>
        <NavigateNextIcon />
      </Slider> */}
    </div>
  );
}
