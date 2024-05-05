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
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login, register } from '../redux/authSlice';
import { AppDispatch } from '../redux/store';

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

export default function SignIn() {
  const [email, setEmail] = React.useState<String>("");
  const [password, setPassword] = React.useState<String>("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e:any) => {
    // TODO :- HANDLING REDUX LOGIC.
    e.preventDefault();
    
    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
    .unwrap()
    .then(() => navigate('/dashboard'))
    .catch((err) => console.log(err))
  };

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

    <Container sx = {{backgroundColor:"white" , padding : "35px 20px", borderRadius : "10px" , width:{sm:"60%" , md : "45%"}}}>
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
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
            onChange={(e) => setEmail(e.target.value)}
          />
        
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            variant='outlined'
            size='small'
            sx = {{height:'10px', my:1 }}
            onChange={(e) => setPassword(e.target.value)}
          />
   
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mb: 2.5, py: '5px', bgcolor : '#0005f1' , mt : 4}}
          >
            Sign In
          </Button>
          
          <Grid container>
            <Grid item xs>
              <Link href="/forget-password" variant="body2" >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Sign Up"}
              </Link>
            </Grid>
          </Grid>

          </Box>
         </Box>
        </Container>
      </Grid>

      <Copyright sx={{ mt: 5 }} />
    </Grid>
  );
}


