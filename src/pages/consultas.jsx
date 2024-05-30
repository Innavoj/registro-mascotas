import { SignedIn } from "@clerk/clerk-react";
import { Box, Toolbar, Typography } from "@mui/material";


export default function ConsultasPages() {
    return (
        <>
      <SignedIn>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography variant="h3">
            CONSULT Pages
          </Typography>
        </Box>
        </SignedIn>
      </>
    )
}