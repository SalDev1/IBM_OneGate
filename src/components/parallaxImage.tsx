import { Container, Typography } from "@mui/material";
import { Background, Parallax } from "react-parallax";

type BackgroundImageProps = {
  imageUrl: string;
  headerText?: string;
  children?: React.ReactNode;
  darken?: boolean;
};

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  imageUrl,
  headerText,
  darken,
  children,
}) => {
  return (
    <Parallax strength={300} blur={{ min: -100, max: 100 }}>
      <Background className="custom-bg w-screen h-screen">
        <img
          src={imageUrl}
          alt="fill murray"
          className="w-full h-full object-cover"
        />
      </Background>
      <div style={{ height: "100vh" }}>
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "white",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              color: "white",
              fontWeight: "bolder",
              textAlign: "center",
              fontFamily: "Inter, sans-serif",
              marginBottom: "150px",
            }}
          >
            {headerText}
          </Typography>
          {children}
        </Container>
      </div>
    </Parallax>
  );
};

export default BackgroundImage;
