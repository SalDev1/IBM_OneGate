import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bg1 from '../assets/bg1.jpg'
import { blue } from '@mui/material/colors';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} >
      {'Copyright © '}
      <Link color="inherit" href="">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Reset() {
  const handleSubmit = () => {};
  const paperStyle={padding :20,height:'57vh',width:320, margin:"20px auto", overflow:"auto"}
  document.body.style.overflow = 'hidden'

  return (
    <Grid 
        alignContent="center"
        sx={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundColor: blue,
        backgroundPosition: 'center',
        height:'100vh',
        overflow: "hidden"
    }}>
    {/* <Grid sx={{backgroundImage:`url($bg1)`, backgroundColor:blue}}> */}
    <Grid style={{margin:"40px"}}>
    <Paper elevation={9} style={paperStyle} sx={{borderRadius: '13px'}}>

      <Box
        sx={{
          my: 5,
          mx: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#0005f1' }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            variant='outlined'
            size='small'
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 2.5, py: '5px', bgcolor : '#0005f1' }}
          >
            Send OTP
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/signup" variant="body2" >
                Sign Up
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signin" variant="body2">
                Sign In
              </Link>
            </Grid>
          </Grid>

        </Box>

      </Box>
      
      </Paper>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
             </Grid>
             
  );
}


