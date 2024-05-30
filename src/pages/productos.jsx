import { Box, Toolbar, Typography } from "@mui/material";

export default function ProductoPages() {
  return (
    <>
      <SignedIn>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography variant="h3">PRODUCT Pages</Typography>
        </Box>
      </SignedIn>
    </>
  );
}
