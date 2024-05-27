 
 import { Box, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function Custom404() {
  const error = useRouteError();
  return (
    <Box  >
       
      <Typography variant="h3"  >  404 <span className="mx-3 text-4xl">|</span>  {error.data}
      </Typography>
    </Box>
  );
}
