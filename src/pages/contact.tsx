import MaterialHeader from "../components/header";
import {
  Container,
  Grid,
  Paper,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "/contact" },
];

const Contact: React.FC = () => {
  function handleLoginClick(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <MaterialHeader
        title="OneGate"
        links={links}
        onLoginClick={handleLoginClick}
      />
      <Container sx={{ m: 5 }}>
        <Paper sx={{ py: 5 }} elevation={4}>
          <Grid sx={{ p: 4 }} container justifyContent="center">
            <Typography variant="h3">Contact Us</Typography>
          </Grid>
          <Grid sx={{ px: 3 }} container>
            <Grid item xs={6}>
              <img src="https://picsum.photos/500/500"></img>
            </Grid>
            <Grid item xs={6}>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1 },
                }}
                noValidate
                autoComplete="off"
              >
                <Grid container>
                  <Grid item xs={6} sx={{ pr: 1 }}>
                    <TextField
                      sx={{ width: "100%" }}
                      required
                      variant="filled"
                      label="Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      sx={{ width: "100%" }}
                      required
                      label="Email"
                      type="email"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ width: "100%" }}
                      required
                      label="Subject"
                      variant="filled"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      sx={{ width: "100%" }}
                      id="outlined-number"
                      label="Message"
                      type="number"
                      multiline
                      variant="filled"
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ p: 1 }}>
                    <Button variant="contained">Submit</Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Contact;
