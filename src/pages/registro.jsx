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
     const [animal, setAnimal] = useState("");
  //   const [especie, setEspecie] = useState("");
  //   const [raza, setRaza] = useState("");
  //   const [edad, setEdad] = useState("");
  //   const [historia, setHistoria] = useState("");
  //   const [caracter, setCaracter] = useState("");

  return (
    <>
      <Box component="main" display='flex' flexDirection='column' flexWrap='wrap' sx={{ flexGrow: 1, textAlign: "center" }}>
        <Typography sx={{mt: '2em'}} color="orange" fontFamily="serif" variant="h4">
          Registro de Mascotas
        </Typography>
        <Container maxWidth="lg">
          <Grid container>
            <AnimalesPages/>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
