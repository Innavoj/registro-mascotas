import { SignIn, SignedIn } from "@clerk/clerk-react";
import { Box, Toolbar, Typography } from "@mui/material";

export default function DashboardPages() {
  return (
    <>
    
        <Box component="main" sx={{ p: 3, textAlign: 'center'}}>
          <Toolbar />
          <Typography variant="h3">DASHBOARD Pages</Typography>
          <Typography variant="h6">Page is it Protect</Typography>
        </Box>
    
    </>
  );
}
