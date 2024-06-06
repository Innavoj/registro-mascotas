import { SignIn, SignedIn } from "@clerk/clerk-react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import ButtonAction from "../components/Button";

export default function LoginPages() {
  return (
    <>
      {/* <Box component="main" sx={{ flexGrow: 1, p: 3, textAlign: "center" }}> */}
      <Container maxWidth='sm'>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{minHeight: '100vh'}}
        >
          <Grid item>
            <Paper
              sx={{ textAlign: "center", p: "1.2em", borderRadius: "0.5em" }}
            >
              <Typography variant="h4">Iniciar Sesion</Typography>
              <Box component="form"  >
                <TextField fullWidth label="Email" sx={{ mt: 2, mb: 1.5 }} required />
                <TextField fullWidth label="Password" sx={{ mt: 2, mb: 1.5 }} required />
              </Box>
              <ButtonAction
                onClick={() => alert("login")}
                color="success"
                texto="Aceptar"
                variant="contained"
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {/* </Box> */}
    </>
  );
}
