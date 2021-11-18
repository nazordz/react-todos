import React, { Suspense } from 'react'
import {
  AppBar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet, useNavigate } from 'react-router';
import { menus } from './Router';

function App() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const navigate = useNavigate()
  function openPage(destination: string) {
    setOpenDrawer(false)
    navigate(destination)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Todos App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} anchor="left">
        <List sx={{ width: 250 }}>
          { menus.map(menu => (
            <ListItem key={menu.name}>
              <ListItemButton onClick={() => openPage(menu.url)}>
                <ListItemIcon>
                  {menu.icon}
                </ListItemIcon>
                <ListItemText>
                  {menu.label}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          )) }
        </List>
      </Drawer>
      <Suspense fallback={
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      }>
        <Outlet />
      </Suspense>
    </Box>
  )
}

export default App
