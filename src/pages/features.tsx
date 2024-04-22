import { Parallax } from 'react-parallax';
import { Button } from '@mui/material';
import { useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import image from '../assets/user_logs.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import backgroundImage from '../assets/building.jpg';
import MaterialHeader from '../components/header';
import Container from '@mui/material/Container';
import gray from '../assets/gray.jpg';


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
            marginBottom: '150px',
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

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card
      sx={{
        maxWidth: 300,
        minWidth: 350,
        borderRadius: 10,
        p: 2,
        mb: 3,
        cursor: 'pointer',
        backgroundColor: showDetails ? 'white' : 'white', // Change the background color based on showDetails state
      }}
      onClick={handleToggleDetails}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon}
          <Typography variant="h5" sx={{ ml: 2 }}>
            {title}
          </Typography>
          <ArrowDropDownIcon sx={{ ml: 'auto', transform: showDetails ? 'rotate(180deg)' : 'rotate(0deg)' }} />

        </Box>
        {showDetails && (
          <>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {description}
            </Typography>
            {image}
          </>
        )}
      </CardContent>
    </Card>
  );
};

const Features: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h3" component="h2" gutterBottom sx={{ marginLeft: '27.2rem', marginTop: '-50px', fontWeight: 'bolder', fontFamily: 'Inter, sans-serif' }}>
          Features in focus
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 500, marginLeft: '22.2rem', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
          Our features are designed to make your community living experience more convenient, secure, and connected.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Adjust the width of columns as needed
          gap: '20px', // Default gap between all cards
          width: '80%',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bolder',
          marginLeft: '20px',
          mb: 5,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <FeatureCard
            title="Logs"
            description="Access logs and reports for your community."
            icon={<HistoryIcon sx={{ fontSize: '2rem', color: '#323EDD' }} />}
            image={<img src={image} alt="Logs" style={{ width: '100%', height: 'auto' }} />}
          />
          <FeatureCard
            title="Amenities"
            description="Explore the various amenities available in your community."
            icon={<HistoryIcon sx={{ fontSize: '2rem', color: '#323EDD' }} />}
            image={<img src={image} alt="Logs" style={{ width: '100%', height: 'auto' }} />}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'flex-end', marginLeft: '100px', marginBottom: '168px' }}> {/* Added justifyContent: 'flex-end' */}
          <FeatureCard
            title="Newsletter"
            description="Stay updated with the latest community news, events, and announcements delivered directly to your inbox."
            icon={<HistoryIcon sx={{ fontSize: '2rem', color: '#323EDD' }} />}
            image={<img src={image} alt="Logs" style={{ width: '100%', height: 'auto' }} />}
          // Added custom style to move the card towards the right
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            justifyContent: 'flex-end',
            alignItems: 'flex-start', // Adjusted alignItems to move the card towards the top
            marginLeft: '450px',
            marginTop: '-30rem'
          }}
        >
          <FeatureCard
            title="HelpDesk"
            description="Efficient ticket management and resolution for streamlined customer support."
            icon={<HistoryIcon sx={{ fontSize: '2rem', color: '#323EDD' }} />}
            image={<img src={image} alt="Logs" style={{ width: '100%', height: 'auto' }} />}
          />
        </Box>
      </Box>


    </Box>
  );
};


const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

const PageFeatures: React.FC = () => {
  function handleLoginClick(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <MaterialHeader title="OneGate" links={links} onLoginClick={handleLoginClick} />
      <BackgroundImage imageUrl={backgroundImage} headerText="" />
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
    </div>
  );
};

export default PageFeatures;
