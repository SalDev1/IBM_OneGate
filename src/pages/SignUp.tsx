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
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import bg1 from '../assets/bg1.jpg'
import { blue } from '@mui/material/colors';
import { Link as RouterLink} from 'react-router-dom'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {/* {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} */}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = () => {};
  const paperStyle={padding :20,height:'87vh',width:320, margin:"20px auto" , overflow:'auto'}
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
        overflow: 'hidden',
        
    }}>
    {/* <Grid sx={{backgroundImage:`url($bg1)`, backgroundColor:blue}}> */}
    <Grid style={{margin:"20px"}}>
    <Paper elevation={9} style={paperStyle} >

      <Box
        sx={{
          my: 1,
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
          Sign Up
        </Typography>
        <Grid container justifyContent="center">
            <Grid item sx={{textAlign: 'center'}}>
              <Link href="/" variant="body2" >
                {"Already have an account ?"}
              </Link>
            </Grid>
          </Grid>
        
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            variant='outlined'
            size='small'
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
            autoComplete="address"
            variant='outlined'
            size='small'
            autoFocus
          />
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

          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone No"
            name="phone"
            variant='outlined'
            size='small'
            autoFocus
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
            sx = {{height:'10px', mt:2 }}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 7, mb: 2, py: '5px', bgcolor : '#0005f1' }}
          >
            Sign Up
          </Button>
          
          
        </Box>

      </Box>
      
      </Paper>
      </Grid>
      <Copyright sx={{ mt: 8 }} />
             </Grid>
  );
}


