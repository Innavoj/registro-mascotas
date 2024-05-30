import { SignIn, SignedIn } from "@clerk/clerk-react";
import { Box, Toolbar, Typography } from "@mui/material";

export default function DashboardPages() {
  return (
    <>
      <SignedIn>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography variant="h3">DASHBOARD Pages</Typography>
          <Typography variant="h6">Page is it Protect</Typography>
        </Box>
      </SignedIn>
    </>
  );
}
