import { SignedIn } from "@clerk/clerk-react";
import { Box, Toolbar, Typography } from "@mui/material";


export default function EstadisticasPages() {
    return (
        <>
      <SignedIn>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography variant="h3">
            ESTADISTICS Pages
          </Typography>
        </Box>
         </SignedIn>
      </>
    )
}