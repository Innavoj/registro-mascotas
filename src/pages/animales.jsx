import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  InputLabel,
  Menu,
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
import { useSelector } from "react-redux";

export default function AnimalesPages() {
  const [animal, setAnimal] = useState("");
  const [especie, setEspecie] = useState("Perro");
  const [raza, setRaza] = useState("Pastor");
  const [edad, setEdad] = useState("");
  const [historia, setHistoria] = useState("");
  const [propietario, setPropietario] = useState("");
  const [caracter, setCaracter] = useState("");
  const [select, setSelect] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const userActive = useSelector((state) => state.isauth.value);
  const baseURL = "https://node-postgresql-tan.vercel.app";





  if (userActive) {
    return (
      <>
        <Grid item>
          <TextField
            color="primary"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            type="text"
            name="animal"
            variant="standard"
            label="Nombre"
            sx={{ mt: 1.5, mb: 1.5, m: 1.5 }}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            color="primary"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            type="number"
            name="edad"
            variant="standard"
            label="Edad"
            sx={{ mt: 1.5, mb: 1.5, m: 1.5 }}
            required
          />
        </Grid>
        <Grid item>
          <TextField
            color="primary"
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            type="number"
            name="historia"
            variant="standard"
            label="Historia Clinica"
            sx={{ mt: 1.5, mb: 1.5, m: 1.5 }}
            required
          />
        </Grid>
        <Grid item>
          
        <Select
            color="primary"
            defaultValue="Gato"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            name="propietario"
            variant="standard"
            label="Propietario"
            sx={{ mt: 1.5, mb: 1.5, m: 1.5 }}
            required
          >
            <MenuItem value="Opc1">Opc1</MenuItem>
            <MenuItem value="Opc2">Opc2</MenuItem>
            {console.log(propietario)}
          </Select>
           
        </Grid>

        <Grid item>
          <Select
            color="primary"
            defaultValue="Gato"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
            name="especie"
            variant="standard"
            label="Especie"
            sx={{ mt: 1.5, mb: 1.5, m: 1.5 }}
            required
          >
            <MenuItem value="Perro">Perro</MenuItem>
            <MenuItem value="Gato">Gato</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <Select
            color="primary"
            value={raza}
            onChange={(e) => setRaza(e.target.value)}
            name="raza"
            variant="standard"
            label="Raza"
            sx={{ mt: 1.5, mb: 1.5, m: 1.5 }}
            required
          >
            <MenuItem value="Pastor">Pastor</MenuItem>
            <MenuItem value="Pequines">Pequines</MenuItem>
            <MenuItem value="DogBerMan">DogBerMan</MenuItem>
            <MenuItem value="PitBull">PitBull</MenuItem>
          </Select>
        </Grid>

        <TextField
          color="primary"
          value={caracter}
          onChange={(e) => setCaracter(e.target.value)}
          fullWidth
          type="text"
          name="caracter"
          variant="outlined"
          label="Caracteristicas Especiales"
          sx={{ mt: 1.5, mb: 1.5, m: 1.5 }}
          required
          multiline
          maxRows="4"
        />
         <Grid > 
           
          <ButtonAction
            color="info"
            variant="contained"
            texto="Registrar"
            endIcon={<SendIcon />}
          />
          
         </Grid> 
      </>
    );
  }
}
