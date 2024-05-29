import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import * as React from "react";

export default function Footer() {
  return (
    <>
      <AppBar component="footer" color="secondary" position="relative"></AppBar>
      <footer>
        <Toolbar >
          <Box sx={{ height: "500", width: "100vw", backgroundColor: "purple" }} >
            <Box>
              <Typography>Footer</Typography>
            </Box>
            <Box>
              <Typography>Footer</Typography>
            </Box>
            <Box>
              <Typography>Footer</Typography>
            </Box>
          </Box>
        </Toolbar>
      </footer>
    </>
  );
}
