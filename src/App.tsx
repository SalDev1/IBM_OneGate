import React from 'react';
import backgroundImage from './assets/building.jpg';
import BackgroundImageComponent from './pages/home';
import MaterialHeader from './components/header';
import Features from './pages/features';
import Container from '@mui/material/Container';
import gray from './assets/gray.jpg';
import Footer from './components/footer';
import Testimonials from './components/testimonials';


const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

const App: React.FC = () => {
  function handleLoginClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <MaterialHeader title="OneGate" links={links} onLoginClick={handleLoginClick} />
      <BackgroundImageComponent imageUrl={backgroundImage} headerText="" />
      <Container
        maxWidth="xl"
        sx={{
          backgroundImage: `url(${gray})`, // Corrected syntax to set the background image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          textAlign: 'center',
        }}
      >
        <Features />
      </Container>
      
      <Testimonials/>
      
      <Footer/>
    </div>
  );
};

export default App;
