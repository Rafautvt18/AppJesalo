import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ExploreIcon from '@mui/icons-material/Explore';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';


// Estilos personalizados para el Drawer y ListItems
const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#ffffff',
    width: 250,
    padding: theme.spacing(2),
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: theme.palette.grey[200], // Gris claro al pasar el ratón
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  const drawerList = () => (
    
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <StyledListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon sx={{ color: '#3a63b5' }} /> 
          </ListItemIcon>
          <ListItemText primary="Login" />
        </StyledListItem>

        <StyledListItem button component={Link} to="/Dashboard">
          <ListItemIcon>
            <DashboardIcon sx={{ color: '#3a63b5' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </StyledListItem>

        <StyledListItem button component={Link} to="/Clientes">
          <ListItemIcon>
            <PeopleIcon sx={{ color: '#3a63b5' }} />
          </ListItemIcon>
          <ListItemText primary="Clientes" />
        </StyledListItem>

        <StyledListItem button component={Link} to="/Provedores">
          <ListItemIcon>
            <LocalShippingIcon sx={{ color: '#3a63b5' }} />
          </ListItemIcon>
          <ListItemText primary="Provedores" />
        </StyledListItem>

        <StyledListItem button component={Link} to="/Cotizaciones">
          <ListItemIcon>
            <AttachMoneyIcon sx={{ color: '#3a63b5' }} /> {/* Cotizaciones Icon */}
          </ListItemIcon>
          <ListItemText primary="Cotizaciones" />
        </StyledListItem>

        <StyledListItem button component={Link} to="/Misiones">
          <ListItemIcon>
            <ExploreIcon sx={{ color: '#3a63b5' }} /> {/* Misiones Icon */}
          </ListItemIcon>
          <ListItemText primary="Misiones" />
        </StyledListItem>

        <StyledListItem button component={Link} to="/Configuraciones">
          <ListItemIcon>
            <SettingsIcon sx={{ color: '#3a63b5' }} /> {/* Configuraciones Icon */}
          </ListItemIcon>
          <ListItemText primary="Configuraciones" />
        </StyledListItem>

        <StyledListItem button component={Link} to="/Couriers">
          <ListItemIcon>
            <LocalShippingIcon sx={{ color: '#3a63b5' }} /> {/* Couriers Icon */}
          </ListItemIcon>
          <ListItemText primary="Couriers" />
        </StyledListItem>
      </List>
    </div>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3a63b5' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          JESALO EXPRESS LOGISTICS
        </Typography>
      </Toolbar>
      <StyledDrawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {drawerList()}
      </StyledDrawer>
    </AppBar>
  );
};

export default Navbar;
