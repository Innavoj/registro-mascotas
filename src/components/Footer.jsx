import {
  AppBar,
  Box,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";

export default function Footer() {
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "#9500ae" }}
        component="footer"
        position="relative"
      >
        <footer>
          <Container maxWidth="lg" sx={{ m: 2, p: 2, width: "100vw" }}>
            <Grid
              contained
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              
                <Grid item>
                  <Typography>Footer</Typography>
                </Grid>
                <Grid item>
                  <Typography>Footer</Typography>
                </Grid>
                <Grid item>
                  <Typography>Footer</Typography>
                </Grid>
          
            </Grid>
            <Grid
              contained
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
            
                <Grid item>
                  <Typography>Footer</Typography>
                </Grid>
                <Grid item>
                  <Typography>Footer</Typography>
                </Grid>
                <Grid item>
                  <Typography>Footer</Typography>
                </Grid>
            
            </Grid>
            <Grid
              contained
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item>
                <Typography>Footer</Typography>
              </Grid>
              <Grid item>
                <Typography>Footer</Typography>
              </Grid>
              <Grid item>
                <Typography>Footer</Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </AppBar>
    </>
  );
}
