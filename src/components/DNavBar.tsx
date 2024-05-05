import { FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { IoMdMenu } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import {
  Button,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import BottomDraw from "./BottomDraw";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { logout } from "../redux/authSlice";

const DNavBar: FC<any> = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const logOutHandler = (e:any) => {
    e.preventDefault();

    dispatch(logout());
    navigate('/login');
    localStorage.removeItem('user');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#001aff" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <img src={Logo} width={70} height={70} /> OneGate
            <Typography variant="h6" component="div" sx={{ flexGrow: 1  , cursor:'pointer'}} onClick = {() => navigate('/dashboard')}>
              Tower-01
            </Typography>
          </Typography>

          <Button
            color="inherit"
            sx={{
              fontSize: "18px",
              display: { xs: "none", md: "flex" },
              textAlign: "center",
            }}
            onClick={() => navigate('/dashboard/profile')}
          >
            <RiAccountCircleFill size="1.5em" /> Show Profile
          </Button>

          <Button
            color="inherit"
            sx={{
              fontSize: "18px",
              display: { xs: "none", md: "flex" },
              textAlign: "center",
            }}
            onClick={logOutHandler}
          >
            Logout
          </Button>
          {open ? (
            <SwipeableDrawer
              open={open}
              onClose={toggleDrawer(false)}
              anchor="right"
              onOpen={toggleDrawer(true)}
            >
              <BottomDraw toggleDrawer={toggleDrawer} />
            </SwipeableDrawer>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "block", md: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <IoMdMenu />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
// sx --> helps you add css styles.
// display:{xs:'none',md:'block'}}
export default DNavBar;
