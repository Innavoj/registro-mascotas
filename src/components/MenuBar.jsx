import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { SignInButton, SignOutButton } from "@clerk/clerk-react";
import ButtonAction from "./Button";

const organizacion = "Registro Veterinario de Animales Domèsticos";

export default function MenuBar() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [userActive, setUserActive] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  function handleClick() {
    return (
      setUserActive(!userActive)
      //alert('me hiciste click' );
    )
  };


  return (
    <>
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <AppBar className="appbar" position="fixed" open={open}>
          <Toolbar>
            <Container maxWidth="lg">
              <Grid
                contained
                direction="row"
                display="flex"
                flexWrap="nowrap"
                alignItems="center"
                justifyContent="space-between"
              >
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      marginRight: 1,
                      ...(open && { display: "flex" }),
                    }}
                  >
                    <Menu />
                  </IconButton>
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
                      
                { userActive 
                  ? <ButtonAction onClick={()=> navigate('logout')} color="inherit" variant="outlined" texto="Logout" /> 
                  : <ButtonAction onClick={()=> navigate('login')} color="inherit" variant="outlined" texto="Login" />
                }
                 
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
