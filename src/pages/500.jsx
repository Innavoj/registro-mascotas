 
 import { Box, Typography } from "@mui/material";
 import { useRouteError } from "react-router-dom";
 
 export default function Custom500() {
   const error = useRouteError();
   return (
     <Box  >
        
       <Typography variant="h3"  >  {error.status} <span className="mx-3 text-4xl">|</span>  {error.data}
       </Typography>
     </Box>
   );
 }
