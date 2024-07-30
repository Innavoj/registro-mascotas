import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProgressCircular from "../components/ProgressCircular";
import { Container, Divider, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import ButtonAction from "../components/Button";
import SendIcon from "@mui/icons-material/Send";
import TablaBasic from "../components/TablaBasic";
const baseURI = import.meta.env.VITE_BASE_URI;

export default function EditarMascotaPages() {
  const params = useParams();
  const [data, setData] = useState([]);

  const [isloading, setIsloading] = useState(true);
  const userActive = useSelector((state) => state.isauth.value);
  const [historia, setHistoria] = useState("");
  const [animal, setAnimal] = useState("");
  const [especie, setEspecie] = useState("Perro");
  const [raza, setRaza] = useState("Pastor");
  const [edad, setEdad] = useState("");
  const [caracter, setCaracter] = useState("");
  const [propietario, setPropietario] = useState("");
  const [alerta, setAlerta] = useState(false);

  useEffect(() => {
    if (isloading) {
      async function fetchData() {
        try {
          const response = await fetch(baseURI + "/api/animal/" + params.id);
          if (response.ok) {
            const datos = await response.json();
            setData(datos);
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
  }, []);

  const handleClickUpdate = async () => {
    const datos = {
      animal_historia: historia,
      animal_nombre: animal,
      animal_especie: especie,
      animal_raza: raza,
      animal_edad: edad,
      animal_caracter: caracter,
    };
    try {
      const response = await fetch(baseURI + "/api/animal/" + params.id, {
        method: "PUT",
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

  const handleClickDetalles = () => {
      alert('Detalles')
  }

  if (isloading) {
    return <ProgressCircular />;
  }

  if (userActive) {
    console.log(data);
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
                Ediciòn de Mascotas
              </Typography>
              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {data.rows.map((i) => {
                  return (
                    <>
                      <Grid item >
                        <TextField 
                          color="primary"
                          value={i.animal_historia}
                          onChange={(e) => setHistoria(e.target.value)}
                          type="text"
                          name="historia"
                          variant="standard"
                          label="Historia"
                          sx={{ mt: 1.5, m: 1.5 }}
                          required
                        />
                        <TextField
                          color="primary"
                          value={i.animal_nombre}
                          onChange={(e) => setAnimal(e.target.value)}
                          type="text"
                          name="animal"
                          variant="standard"
                          label="Nombre"
                          sx={{ mt: 1.5, m: 1.5 }}
                          required
                        />
                        <TextField
                          color="primary"
                          value={i.animal_especie}
                          onChange={(e) => setEspecie(e.target.value)}
                          type="text"
                          name="especie"
                          variant="standard"
                          label="Especie"
                          sx={{ mt: 1.5, m: 1.5 }}
                          required
                        />
                        <TextField
                          color="primary"
                          value={i.animal_raza}
                          onChange={(e) => setRaza(e.target.value)}
                          type="text"
                          name="raza"
                          variant="standard"
                          label="Raza"
                          sx={{ mt: 1.5, m: 1.5 }}
                          required
                        />
                        <TextField
                          color="primary"
                          value={i.animal_edad}
                          onChange={(e) => setEdad(e.target.value)}
                          type="text"
                          name="edad"
                          variant="standard"
                          label="Edad"
                          sx={{ mt: 1.5, m: 1.5 }}
                          required
                        />

                        <Grid item sx={{ width: "100%" }}>
                          <TextField
                            color="primary"
                            value={i.animal_caracter}
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
                      </Grid>
                    </>
                  );
                })}

                <Grid item sx={{ mt: 1.5, mb: 1.5, m: 1.5 }} >
                  <Stack spacing={2}>
                  <ButtonAction
                    onClick={handleClickUpdate}
                    color="info"
                    variant="contained"
                    texto="Actualizar"
                    endIcon={<SendIcon />}
                  />
                  <ButtonAction
                    onClick={handleClickDetalles}
                    color="info"
                    variant="contained"
                    texto="Detalles"
                    endIcon={<SendIcon />}
                  />
                  </Stack>
                </Grid>
                
              </Grid>
                
              
              <Divider sx={{ mt: 2, mb: 1 }}>OR</Divider>
              
            </Paper>
           
          </Grid>
        </Container>
      </>
    );
  }
}
