import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link, Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Grid, Icon, Stack } from "@mui/material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SummarizeIcon from "@mui/icons-material/Summarize";
import SingIn from "./SingIn";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignOutButton,
} from "@clerk/clerk-react";
import HomePages from "../pages/home";

const drawerWidth = 240;
const organizacion = "Registro Veterinario de Animales Domèsticos";

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

 const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== "open",
 })(({ theme, open }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(["width", "margin"], {
     easing: theme.transitions.easing.sharp,
     duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
     marginLeft: drawerWidth,
     width: `calc(100% - ${drawerWidth}px)`,
     transition: theme.transitions.create(["width", "margin"], {
       easing: theme.transitions.easing.sharp,
       duration: theme.transitions.duration.enteringScreen,
     }),
   }),
 }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   color: "secondary",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="secondary" position="fixed" open={open}>
        <Toolbar>
          <SignedIn>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
          </SignedIn>
          <Grid container >
            <Stack spacing={4} direction="row" alignItems='center' justifyContent="center">
              <Grid item >
                <Typography variant="h6" noWrap>
                  {organizacion}
                </Typography>
              </Grid>
              <Grid item>
                <SingIn />
              </Grid>
            </Stack>
          </Grid>
        </Toolbar>
      </AppBar>

      <SignedIn>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <UserButton />
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon /> 
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
              {
                title: "Home",
                linked: "/",
                icon: <HomeIcon />,
              },
              {
                title: "Dashboard",
                linked: "/dashboard",
                icon: <DashboardIcon />,
              },
              {
                title: "Productos",
                linked: "/productos",
                icon: <ProductionQuantityLimitsIcon />,
              },
              {
                title: "Consultas",
                linked: "/consultas",
                icon: <SummarizeIcon />,
              },
              {
                title: "Estadisticas",
                linked: "/estadisticas",
                icon: <ShowChartIcon />,
              },
              {
                title: "Buscar",
                linked: "/search",
                icon: <SearchIcon />,
              },
            ].map((text) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <Link to={text.linked}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={text.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[
              {
                title: "Contactos",
                linked: "/contactos",
                icon: <MailIcon />,
              },
              {
                title: "About",
                linked: "/about",
                icon: <ContactPageIcon />,
              },
            ].map((text) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <Link to={text.linked}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icon}
                    </ListItemIcon>

                    <ListItemText
                      primary={text.title}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </SignedIn>

      {/* <Box component="main">
          <Portada />
        </Box> */}
    </Box>
  );
}
