import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Outlet } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SummarizeIcon from "@mui/icons-material/Summarize";

import ShowChartIcon from "@mui/icons-material/ShowChart";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

import MenuIcon from "@mui/icons-material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import ButtonAction from "./Button";
import MiniDrawer from "./Drawer";
import { useSelector, useDispatch } from "react-redux";
//import { logout } from "../redux/authSlice";

const organizacion = "Registro Veterinario de Animales Domèsticos";
const drawerWidth = 240;

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
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

export default function MenuBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const userActive = useSelector((state) => state.isauth.value);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  console.log("Valor de userActive en MenuBar: " + userActive);
  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <CssBaseline />
        <AppBar className="appbar" position="fixed" open={open}>
          <Toolbar>
            <Container maxWidth="lg">
              <Grid
                container
                direction="row"
                display="flex"
                flexWrap="nowrap"
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  { userActive && 
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      marginRight: 2,
                      ...(open && { display: "none" }),
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  }
                </Grid>
                <Grid item>
                  <Typography variant="h6">{organizacion}</Typography>
                </Grid>

                <Grid
                  item
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                >
                  {userActive ? (
                    <ButtonAction
                      onClick={() => navigate("logout")}
                      color="warning"
                      variant="outlined"
                      startIcon={<LogoutIcon />}
                    />
                  ) : (
                    <ButtonAction
                      onClick={() => navigate("login")}
                      color="warning"
                      variant="outlined"
                      startIcon={<LoginIcon />}
                    />
                  )}
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        { userActive && 
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
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
              <ListItem key={text.title} disablePadding sx={{ display: "block" }}>
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
              <ListItem key={text.title} disablePadding sx={{ display: "block" }}>
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
      }   
      </Box>
    </>
  );
}
