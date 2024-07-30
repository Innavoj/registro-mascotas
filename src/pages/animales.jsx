import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import ButtonAction from "../components/Button";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import ProgressCircular from "../components/ProgressCircular";

import ModalBasic from "../components/Modal";
import { useNavigate } from "react-router-dom";
import EnviaAlertas from "../components/Alert.jsx";


const baseURI = import.meta.env.VITE_BASE_URI;

export default function AnimalesPages() {
  const [animal, setAnimal] = useState("");
  const [especie, setEspecie] = useState("Perro");
  const [raza, setRaza] = useState("Pastor");
  const [edad, setEdad] = useState("");
  const [historia, setHistoria] = useState("");
  const [propietario, setPropietario] = useState("");
  const [caracter, setCaracter] = useState("");
  const [select, setSelect] = useState([]);
  const [alerta, setAlerta] = useState(false);
  const [isloading, setIsloading] = useState(true);
  const userActive = useSelector((state) => state.isauth.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (isloading) {
      async function fetchData() {
        try {
          const response = await fetch(baseURI + "/api/propietario");
          if (response.ok) {
            const datos = await response.json();
            setSelect(datos);
            setIsloading(false);
          } else {
            alert("Hubo error al obtener Datos");
          }
        } catch (error) {
          alert("Error en la API " + error);
        }
      }
      fetchData();
    }
  }, [isloading]);


  const handleClickInserta = async () => {
    const datos = {
      animal_historia: historia,
      animal_nombre: animal,
      animal_especie: especie,
      animal_raza: raza,
      animal_edad: edad,
      animal_caracter: caracter,
    };
    try {
      const response = await fetch(baseURI + "/api/animal/" + propietario, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(datos),
      });
      const data = await response.json();
      setAlerta(true);
      setInterval(location.reload(), 10000);
    } catch (error) {
      alert("Error al insertar en BD: " + error);
    }
  };

  if (isloading) {
    return <ProgressCircular />;
  }

  if (userActive) {
    return (
      <>
        <Container maxWidth="lg" sx={{ m: 2, p: 2, width: "100vw" }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                textAlign: "start",
                p: "1.5em",
                mt: "2em",
                borderRadius: "0.5em",
              }}
            >
              <Typography
                color="orange"
                fontFamily="serif"
                variant="h4"
                textAlign="center"
              >
                Registro de Mascotas
              </Typography>

              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Grid item>
                  <TextField
                    color="primary"
                    value={animal}
                    onChange={(e) => setAnimal(e.target.value)}
                    type="text"
                    name="animal"
                    variant="standard"
                    label="Nombre"
                    sx={{ mt: 1.5, m: 1.5 }}
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
                    sx={{ mt: 1.5, m: 1.5 }}
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
                    label="Historia "
                    sx={{ mt: 1.5, m: 1.5 }}
                    required
                  />
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
                    sx={{ pt: 2, m: 2, width: "150px" }}
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
                    sx={{ pt: 2, m: 2, width: "150px" }}
                    required
                  >
                    <MenuItem value="Pastor">Pastor</MenuItem>
                    <MenuItem value="Pequines">Pequines</MenuItem>
                    <MenuItem value="DogBerMan">DogBerMan</MenuItem>
                    <MenuItem value="PitBull">PitBull</MenuItem>
                    <MenuItem value="Sato">Sato</MenuItem>
                    <MenuItem value="Siamess">Siamess</MenuItem>
                    <MenuItem value="Angorano">Angorano</MenuItem>
                  </Select>
                </Grid>
                <Grid
                  item
                  sx={{
                    pt: 2,
                    pb: 2,
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <InputLabel id="select-label" sx={{ m: 1.5, pt: 2 }}>
                    Propietario:
                  </InputLabel>

                  <Select
                    labelId="select-label"
                    id="select"
                    color="primary"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    name="propietario"
                    variant="standard"
                    label="Propietario"
                    sx={{ width: "80%", mt: 1.5, mb: 1.5, m: 1.5 }}
                    required
                  >
                    {select.rows.map((e) => {
                      return (
                        <MenuItem
                          key={e.propietario_id}
                          value={e.propietario_id}
                        >
                          {e.propietario_nombre1} {e.propietario_nombre2}{" "}
                          {e.propietario_apell1} {e.propietario_apell2}{" "}
                          {e.propietario_email}
                        </MenuItem>
                      );
                    })}
                  </Select>

                  <ModalBasic />
                </Grid>

                <Grid item sx={{ width: "100%" }}>
                  <TextField
                    color="primary"
                    value={caracter}
                    onChange={(e) => setCaracter(e.target.value)}
                    fullWidth
                    type="text"
                    name="caracter"
                    variant="outlined"
                    label="Caracteristicas Especiales"
                    sx={{ width: "90%", mt: 1.5, mb: 1.5, m: 1.5 }}
                    required
                    multiline
                    maxRows="4"
                  />
                </Grid>
           
                <Grid item sx={{ mt: 1.5, mb: 1.5, m: 1.5 }}>
                  <ButtonAction
                    onClick={handleClickInserta}
                    color="info"
                    variant="contained"
                    texto="Registrar"
                    endIcon={<SendIcon />}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
         
        </Container>
        {alerta && ( 
          <EnviaAlertas severity="success" texto="Se inserto Correctamente" alert={alerta}/>
          
          )}
      </>
    );
  }
}
