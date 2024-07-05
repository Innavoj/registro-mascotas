import React, { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ButtonAction from "../components/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

export default function PropietariosPages() {
  const [nombre1, setNombre1] = useState("");
  const [nombre2, setNombre2] = useState("");
  const [apell1, setApell1] = useState("");
  const [apell2, setApell2] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
 

  return (
    <>
      <Box component="main" sx={{  textAlign: "center" }}>
        <Container maxWidth="xs">
          <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
          >
            <Grid item>
              <Paper
                sx={{ textAlign: "center", p: "1.2em", borderRadius: "0.5em" }}
              >
                <Typography color="orangered"
                  fontFamily="serif"
                  variant="h4"
                  sx={{ pt: 2, pb: 2 }}
                >
                  Propietario
                </Typography>

                <Box component="form">
             
                    <TextField
                      color="primary"
                      value={nombre1}
                      onChange={(e) => setNombre1(e.target.value)}
                      fullWidth
                      type="text"
                      name="nombre1"
                      variant="standard"
                      label="1er Nombre"
                      sx={{ mt: 1.5, mb: 1.5 }}
                      required
                    />
                    <TextField
                      color="primary"
                      value={nombre2}
                      onChange={(e) => setNombre2(e.target.value)}
                      fullWidth
                      type="text"
                      name="nombre2"
                      variant="standard"
                      label="2do Nombre"
                      sx={{ mt: 1.5, mb: 1.5 }}
                      
                    />
                    <TextField
                      color="primary"
                      value={apell1}
                      onChange={(e) => setApell1(e.target.value)}
                      fullWidth
                      type="text"
                      name="apell1"
                      variant="standard"
                      label="1er Apellido"
                      sx={{ mt: 1.5, mb: 1.5 }}
                      required
                    /> 
                    <TextField
                      color="primary"
                      value={apell2}
                      onChange={(e) => setApell2(e.target.value)}
                      fullWidth
                      type="text"
                      name="apell2"
                      variant="standard"
                      label="2do Apellido"
                      sx={{ mt: 1.5, mb: 1.5 }}
                      required
                    />      
                  <TextField
                    color="primary"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    fullWidth
                    type="text"
                    name="telefono"
                    variant="standard"
                    label="Telefono / Celular"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    type="email"
                    name="email"
                    variant="standard"
                    label="Email"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                                    
                  {/* <Divider sx={{ mt: 2, mb: 1 }}></Divider>
                  <ButtonAction
                    color="info"
                    variant="contained"
                    texto="Registrar"
                    endIcon={<SendIcon />}
                  /> */}
                  
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}