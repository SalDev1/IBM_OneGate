import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React , {FC} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../redux/store';
import { logout } from '../redux/authSlice';

const BottomDraw : FC<any> = (props:any) => {
   const navigate = useNavigate();
   const dispatch = useDispatch<AppDispatch>();

   const logOutHandler = (e:any) => {
    e.preventDefault();

    dispatch(logout());
    navigate('/login');
    localStorage.removeItem('user');
   }
   
    return (
        <Box sx={{ width: 250 ,cursor : 'pointer'}} role="presentation" onClick={props.toggleDrawer(false)}>
          <Button onClick={props.toggleDrawer(false)}>
          </Button>
          <List>
             <ListItem key={"Amenities"} disablePadding>
                <ListItemButton onClick={() => navigate(`/dashboard/amenities/book-amenity`)}>
                  <ListItemText primary={"Amenities"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Help Desk"} disablePadding>
                <ListItemButton onClick={() => navigate(`/dashboard/helpdesk`)}>
                  <ListItemText primary={"Help Desk"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Profile"} disablePadding>
                <ListItemButton onClick={() => navigate(`/dashboard/profile`)}>
                  <ListItemText primary={"Profile"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={"Logout"} disablePadding>
                <ListItemButton onClick={logOutHandler}>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
          </List>
        </Box>
    )
}
export default BottomDraw;