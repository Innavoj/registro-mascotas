import { Box, Toolbar, Typography } from "@mui/material";


export default function SearchPages() {
    return (
        <>
       <SignedIn>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography variant="h3">
            SEARCH Pages
          </Typography>
        </Box>
        </SignedIn>
      </>
    )
}