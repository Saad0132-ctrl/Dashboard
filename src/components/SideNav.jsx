import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MuiDrawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import SettingsIcon from '@mui/icons-material/Settings'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

const drawerWidth = 240

const openedMixin = theme => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: 'hidden'
})

const closedMixin = theme => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
})

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}))

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open ? openedMixin(theme) : closedMixin(theme)),
  '& .MuiDrawer-paper': open ? openedMixin(theme) : closedMixin(theme)
}))

export default function SideNav () {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  return (
    <Box sx={{  }}>
      <CssBaseline />
      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <ListItem
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => navigate('/')}
        >
          <ListItemButton
            sx={{ justifyContent: open ? 'initial' : 'center', px: 2.5 }}
          >
            <ListItemIcon
              sx={{ justifyContent: 'center', mr: open ? 3 : 'auto' }}
            >
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => navigate('/about')}
        >
          <ListItemButton
            sx={{ justifyContent: open ? 'initial' : 'center', px: 2.5 }}
          >
            <ListItemIcon
              sx={{ justifyContent: 'center', mr: open ? 3 : 'auto' }}
            >
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='About' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => navigate('/setting')}
        >
          <ListItemButton
            sx={{ justifyContent: open ? 'initial' : 'center', px: 2.5 }}
          >
            <ListItemIcon
              sx={{ justifyContent: 'center', mr: open ? 3 : 'auto' }}
            >
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary='Setting' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => navigate('/products')}
        >
          <ListItemButton
            sx={{ justifyContent: open ? 'initial' : 'center', px: 2.5 }}
          >
            <ListItemIcon
              sx={{ justifyContent: 'center', mr: open ? 3 : 'auto' }}
            >
              <ProductionQuantityLimitsIcon />
            </ListItemIcon>
            <ListItemText primary='Products' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => navigate('/product2')}
        >
          <ListItemButton
            sx={{ justifyContent: open ? 'initial' : 'center', px: 2.5 }}
          >
            <ListItemIcon
              sx={{ justifyContent: 'center', mr: open ? 3 : 'auto' }}
            >
              <ProductionQuantityLimitsIcon />
            </ListItemIcon>
            <ListItemText primary='Products' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: 'block' }}
          onClick={() => navigate('/category')}
        >
          <ListItemButton
            sx={{ justifyContent: open ? 'initial' : 'center', px: 2.5 }}
          >
            <ListItemIcon
              sx={{ justifyContent: 'center', mr: open ? 3 : 'auto' }}
            >
              <ProductionQuantityLimitsIcon />
            </ListItemIcon>
            <ListItemText primary='Category' sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </Drawer>
      <Navbar setOpen={setOpen} open={open} />
    </Box>
  )
}
