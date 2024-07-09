 
import { Box, Toolbar, Typography } from "@mui/material";
import DataTable from "../components/TablaStock";

export default function InventarioPages() {
  return (
    <>
    
        <Box component="main" sx={{ flexGrow: 1, p: 1, textAlign: 'center'}}>
          <Toolbar />
          <Typography variant="h4" color="orange">Inventario de Productos en Almacen </Typography>
          
            <DataTable />
        </Box>
    
    </>
  );
}