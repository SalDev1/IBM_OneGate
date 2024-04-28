import {
  Container,
  Grid,
  Paper,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";

const Contact: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container sx={{ py: 15 }}>
        <div className="border-slate-200 shadow-xl max-w-4xl mx-auto rounded-xl overflow-hidden border grid sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2">
          <img
            src="https://unsplash.com/photos/4xe-yVFJCvw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHRhbGt8ZW58MHx8fHwxNzEzOTYxNDI2fDA&force=true&w=2400"
            className="bg-black w-full h-full aspect-video md:aspect-square object-cover"
          ></img>
          <Grid p={4} container justifyContent="center">
            <Typography variant="h6">Contact Us</Typography>
            <Grid container sx={{ width: "100%" }}>
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
                  <Grid
                    item
                    xs={12}
                    sx={{ pt: 1, display: "flex", flexDirection: "row-reverse" }}
                  >
                    <button className="primary sm:flex-grow-1 md:flex-grow-0">
                      Submit
                    </button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
