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
import { Link as RouterLink, useNavigate} from 'react-router-dom'
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { register } from '../redux/authSlice';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function SignUp() {

  const [firstName , setFirstName] = React.useState<String>("");
  const [lastName , setLastName] = React.useState<String>("");
  const [address , setAddress] = React.useState<String>("");
  const [phoneNo , setPhoneNo] = React.useState<String>("");
  const [email , setEmail] = React.useState<String>("");
  const [password , setPassword] = React.useState<String>("");

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // TODO: REDUX-LOGIC.
    const userData = {
      firstName,
      lastName,
      address,
      phoneNo,
      email,
      password
    }

    dispatch(register(userData))
    .unwrap()
    .then(() => {
        navigate('/login');
    }).catch((error) => {
        console.log(error);
    })
  }

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
    <Container sx = {{backgroundColor:"white" , padding : "35px 20px", borderRadius : "10px" , width:{sm:"60%" , md : "45%"}}}>
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
              <Link href="/login" variant="body2" >
                {"Already have an account ?"}
              </Link>
            </Grid>
          </Grid>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

        <Box sx = {{display:"flex",justifyContent:"center",alignContent:"center" , width:"100%"}}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="First Name"
              name="name"
              variant='outlined'
              size='small'
              autoFocus
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Last Name"
              name="name"
              variant='outlined'
              size='small'
              autoFocus
              sx = {{marginLeft : "5px"}}
              onChange={(e) => setLastName(e.target.value)}
            />
        </Box>
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
            onChange={(e) => setAddress(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPhoneNo(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
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
      
      </Container>
      </Grid>
      <Copyright sx={{ mt: 8 }} />
    </Grid>
  );
}


