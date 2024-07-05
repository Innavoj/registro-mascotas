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
import AnimalesPages from "./animales";
import PropietariosPages from "./propietarios";

export default function RegistroPages() {
//   const [animal, setAnimal] = useState("");
//   const [especie, setEspecie] = useState("");
//   const [raza, setRaza] = useState("");
//   const [edad, setEdad] = useState("");
//   const [historia, setHistoria] = useState("");
//   const [caracter, setCaracter] = useState("");

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 8, textAlign: "center" }}>
        <Container maxWidth="lg">
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
                <Typography color="orange"
                  fontFamily="serif"
                  variant="h4"
                  sx={{ pt: 2, pb: 2 }}
                >
                  Registro Veterinario
                </Typography>

                <Box  display="flex" flexWrap={"wrap"}>
                  <AnimalesPages />
                 
                  <PropietariosPages />
                </Box>
                <Divider sx={{ mt: 2, mb: 1 }}></Divider>
                <ButtonAction
                  color="info"
                  variant="contained"
                  texto="Registrar"
                  endIcon={<SendIcon />}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
