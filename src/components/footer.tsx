import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "white",
        padding: "2rem 0",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} OneGate. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        <Link href="/about" color="inherit" underline="hover" style={{ marginRight: "1rem" }}>
          About Us
        </Link>
        <Link href="/contact" color="inherit" underline="hover" style={{ marginRight: "1rem" }}>
          Contact Us
        </Link>
        <Link href="/terms" color="inherit" underline="hover" style={{ marginRight: "1rem" }}>
          Terms of Service
        </Link>
        <Link href="/privacy" color="inherit" underline="hover" style={{ marginRight: "1rem" }}>
          Privacy Policy
        </Link>
      </Typography>
      <Typography variant="body2" sx={{ marginTop: 1 }}>
        Follow us:
        <Link href="https://twitter.com/OneGate" color="inherit" underline="hover" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
          Twitter
        </Link>
        <Link href="https://www.facebook.com/OneGate" color="inherit" underline="hover" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
          Facebook
        </Link>
        <Link href="https://www.instagram.com/OneGate" color="inherit" underline="hover" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
          Instagram
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
