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

export default function AnimalesPages() {
  const [animal, setAnimal] = useState("");
  const [especie, setEspecie] = useState("");
  const [raza, setRaza] = useState("");
  const [edad, setEdad] = useState("");
  const [historia, setHistoria] = useState("");
  const [caracter, setCaracter] = useState("");


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
                <Typography
                  fontFamily="serif"
                  variant="h4"
                  sx={{ pt: 2, pb: 2 }}
                >
                  Animal
                </Typography>

                <Box component="form">
             
                    <TextField
                      color="primary"
                      value={animal}
                      onChange={(e) => setAnimal(e.target.value)}
                      fullWidth
                      type="text"
                      name="animal"
                      variant="standard"
                      label="Nombre"
                      sx={{ mt: 1.5, mb: 1.5 }}
                      required
                    />
                    <InputLabel>Especie</InputLabel>
                    <Select fullWidth value={especie} name="especie" onChange={(e) => setEspecie(e.target.value)} variant="standard" label="Especie" required>
                      <MenuItem value="Perro">Perro</MenuItem>
                      <MenuItem value="Gato">Gato</MenuItem>
                      <MenuItem value="Gato">Cerdo</MenuItem>
                      <MenuItem value="Gato">Pajaro</MenuItem>
                    </Select>
                    <InputLabel>Raza</InputLabel>
                    <Select fullWidth value={raza} name="raza" onChange={(e) => setRaza(e.target.value)} variant="standard" label="Raza" required>
                      <MenuItem value="Pastor">Pastor</MenuItem>
                      <MenuItem value="Pequines">Pequines</MenuItem>
                      <MenuItem value="Salchicha">Salchicha</MenuItem>
                      <MenuItem value="EstandFord">EstandFord</MenuItem>
                      <MenuItem value="Dogberman">Dogberman</MenuItem>
                      <MenuItem value="Pitbull">Pitbull</MenuItem>
                    </Select>
            
                  <TextField
                    color="primary"
                    value={edad}
                    onChange={(e) => setEdad(e.target.value)}
                    fullWidth
                    type="number"
                    name="edad"
                    variant="standard"
                    label="Edad"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={historia}
                    onChange={(e) => setHistoria(e.target.value)}
                    fullWidth
                    type="number"
                    name="historia"
                    variant="standard"
                    label="Historia Clinica"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={caracter}
                    onChange={(e) => setCaracter(e.target.value)}
                    fullWidth
                    type="text"
                    name="caracter"
                    variant="outlined"
                    label="Caracteristicas Especiales"
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
