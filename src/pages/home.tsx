import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Container, Button } from '@mui/material';

interface BackgroundImageProps {
  imageUrl: string;
  headerText: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  headerText,
}) => {
  return (
    <Parallax
      bgImage={imageUrl}
      strength={400}
      style={{
        height: '150vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // filter: 'brightness(50%)',
        // opacity: '0.8',
      }}
    >
      <div style={{ height: '100vh' }}>
        <Container
          maxWidth="md"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            height: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Typography component for the header text */}
          <Typography variant="h3" component="h1" gutterBottom style={{ opacity: 1.6, transform: 'translateY(30%)' }}>
            {headerText}
          </Typography>
          {/* Typography component for the additional text */}
          <Typography variant="h2" gutterBottom sx={{
        color: 'white',
        fontWeight: 'bolder',
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        marginBottom : '150px',
      }}>
        Experience community living at its best
      </Typography>
          {/* Button component for the login call-to-action */}
          <Button
  variant="contained"
  color="primary"
  size="large"
  sx={{ 
    position: 'absolute', 
    right: '150px', 
    bottom: '208px', 
    bgcolor: '#323EDD', 
    color: 'white',
    whiteSpace: 'nowrap' // Set white-space to nowrap
  }}
  href="/login"
>
  JOIN US
</Button>
         
        </Container>
      </div>
    </Parallax>
  );
};

export default BackgroundImage;
