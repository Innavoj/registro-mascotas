import * as React from "react";

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

const organizacion = "Registro Veterinario de Animales Domèsticos";

export default function MenuBar() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-evenly"
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
                  <Stack direction="row" spacing={4}>
                    <Button color="inherit" variant="outlined">
                      Sing In
                    </Button>
                    <Button color="inherit" variant="outlined">
                      Sin Out
                    </Button>

                    {/* <SignInButton />
                  <SignOutButton />  */}
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
