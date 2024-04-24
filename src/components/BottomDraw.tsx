import { Box, Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React , {FC} from 'react';

const BottomDraw : FC<any> = (props:any) => {
    return (
        <Box sx={{ width: 250 ,cursor : 'pointer'}} role="presentation" onClick={props.toggleDrawer(false)}>
          <Button onClick={props.toggleDrawer(false)}>
          </Button>
          <List>
            {['Amenities', 'Help Desk','Profile','Logout'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
    )
}
export default BottomDraw;