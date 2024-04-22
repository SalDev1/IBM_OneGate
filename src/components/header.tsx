import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import Logo from '../assets/logo.svg';

type MaterialHeaderProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
  onLoginClick: () => void;
}

const MaterialHeader: React.FC<MaterialHeaderProps> = ({ title, links, onLoginClick }) => {
  return (
    <Card sx={{ my:2,mx:'auto',backgroundColor: 'white', color: 'black', height: '4rem', top: '1rem', width: '95%', borderRadius: '2rem', zIndex: 1000 }}>
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between" margin="4px">
          {/* Adjust width and height of the Box to fit the logo and add vertical alignment */}
          <Box sx={{ width: '60px', height: '52px', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '100%', height: '45px', marginTop: '-28px' }}>
              <img src={Logo} />
            </div>
          </Box>
          <Typography variant="h5" component="h2" sx={{ fontFamily: 'Inter, sans-serif', marginRight: '660px', marginTop: '-25px', color: '#323EDD', fontWeight: 'bolder' }}>
            {title}
          </Typography>
          <Box display="flex">
            {links.map((link, index) => (
              <Typography key={index} component="a" href={link.href} sx={{ color: 'black', textDecoration: 'none', marginLeft: index === links.length - 1 ? '2rem' : '3rem', fontFamily: 'Inter, sans-serif', fontSize: '17px' }}>
                {link.label}
              </Typography>
            ))}
            <Box sx={{ marginRight: '1rem', marginLeft: '2rem' }}>
              <Button variant="text">Login</Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MaterialHeader;
