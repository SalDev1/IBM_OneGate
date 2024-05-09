import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import { addQuery } from "../redux/querySlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

export default function PageContact() {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const status = document.getElementById("contactFormStatus");
    const formData = new FormData(e.target);

    const queryData = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("message subject"),
      message: formData.get("message"),
    };

    dispatch(addQuery(queryData))
      .unwrap()
      .then(() => {
        status.innerHTML = "Thanks for your submission!";
      })
      .catch((error: any) => {
        status.innerHTML = "Oops! There was a problem submitting your form";
      });
  };

  return (
    <>
      <NavBar />
      <Container sx={{ py: { xs: 2, md: 4 } }}>
        <div className="border-slate-200 shadow-xl max-w-4xl mx-auto rounded-xl overflow-hidden border grid sm:grid-rows-2 sm:grid-cols-1 md:grid-rows-1 md:grid-cols-2">
          <img
            src="https://unsplash.com/photos/4xe-yVFJCvw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fHRhbGt8ZW58MHx8fHwxNzEzOTYxNDI2fDA&force=true&w=800"
            className="bg-black w-full h-full aspect-video md:aspect-square object-cover"
            alt="Contact"
          />
          <Grid p={4} container justifyContent="center">
            <Typography variant="h6">Contact Us</Typography>
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              style={{ width: "100%" }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    variant="filled"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    variant="filled"
                    type="email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                    name="message subject"
                    variant="filled"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    variant="filled"
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <div className="form-status" id="contactFormStatus" />
                </Grid>
              </Grid>
            </form>
          </Grid>
        </div>
      </Container>
      <Footer />
    </>
  );
}
