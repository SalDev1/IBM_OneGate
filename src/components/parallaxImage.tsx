import { Container, Typography } from "@mui/material";
import { Parallax } from "react-parallax";

type BackgroundImageProps = {
  imageUrl: string;
  headerText?: string;
  children?: React.ReactNode;
  darken?: boolean
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  headerText,
  darken,
  children
}) => {
  return (
    <Parallax
      bgImage={imageUrl}
      strength={400}
      style={{
        height: '100vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: darken ? 'brightness(50%)' : '',
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
          <Typography variant="h2" gutterBottom sx={{
            color: 'white',
            fontWeight: 'bolder',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '150px',
          }}>
            {headerText}
          </Typography>
          {children}
        </Container>
      </div>
    </Parallax>
  );
};

export default BackgroundImage
