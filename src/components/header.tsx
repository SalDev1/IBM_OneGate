import { Typography, Button, Box, AppBar, Toolbar } from '@mui/material';
import { Link, NavLink } from "react-router-dom"
import Logo from '../assets/logo.svg';

type ThemedAppBarProps = {
  title: string;
  centerItems?: React.ReactNode;
  trailingItems?: React.ReactNode;
  transparent?: boolean
}

type ThemedAppBarLink = {
  label: string;
  href: string;
}


const CustomAppBar: React.FC<ThemedAppBarProps> = ({ title, trailingItems, centerItems, transparent }) => {
  return (
    <AppBar sx={{ p: '0rem', background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%);' }} elevation={0}>
      <Toolbar sx={{
        padding: "0.75rem",
        backgroundColor: transparent ? '#0000' : '#FFFB',
        borderBottom: transparent ? "none" : "1px solid #ddd",
        backdropFilter: transparent ? "none" : 'blur(2rem) saturate(1.5)',
        color: transparent ? 'white' : 'black',
        borderRadius: '0rem',
        boxShadow: transparent ? "none" : '12px 0px 40px #0002',
        display: 'grid',
        gridTemplateColumns: `repeat(3, minmax(0, 1fr));`,
        gridTemplateRows: "1fr"
      }}>
        <Box sx={{ display: "flex" }}>
          <Link to={"/"}>
            <Button aria-label="open drawer">
              <img src={Logo} />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' }, fontFamily: 'Inter, sans-serif', color: transparent ? 'white' : '#323EDD', textTransform: "capitalize" }}
              >
                {title}
              </Typography>
            </Button></Link>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
          {centerItems}
        </Box>

        <Box sx={{ marginRight: '1rem', marginLeft: '2rem', display: "flex", gap: '1rem', flexDirection: "row-reverse" }}>
          {trailingItems}
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
