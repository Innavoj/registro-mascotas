import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ButtonAction from "../components/Button";
import SendIcon from "@mui/icons-material/Send";
import TablaBasic from "../components/TablaBasic";
import { useSelector } from "react-redux";

import ProgressCircular from "../components/ProgressCircular";

import ModalBasic from "../components/Modal";
import { useNavigate } from "react-router-dom";

const baseURI = import.meta.env.VITE_BASE_URI;

const columns = [
  // { field: "animal_id", headerName: "ID" },
  //  { field: "propietario_id", headerName: "Propietario", type: "number" },
  { field: "animal_historia", headerName: "Historia", type: "number" },
  { field: "animal_nombre", headerName: "Nombre", type: "string" },
  { field: "animal_especie", headerName: "Especie", type: "string" },
  { field: "animal_raza", headerName: "Raza", type: "string" },
  { field: "animal_edad", headerName: "Edad", type: "string" },
  { field: "animal_caracter", headerName: "Caracteristicas", type: "string" },
];

export default function MascotasPages() {
  const [buscar, setBuscar] = useState("");
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);
 
 
  const [isloading, setIsloading] = useState(true);
  const userActive = useSelector((state) => state.isauth.value);
  const limitPage = import.meta.env.VITE_LIMIT_PAGE;


  useEffect(() => {
    if (isloading) {
      async function fetchData() {
        try {
          const response = await fetch(baseURI + "/api/animal");
          if (response.ok) {
            const datos = await response.json();
            setData(datos);
       
            setCount(Math.ceil(datos.rows.length / limitPage))
            setIsloading(false);
          } else {
            alert("Hubo error al obtener Datos");
          }
        } catch (error) {
          alert("Error en la API");
        }
      }
      fetchData();
    }
  }, []);



   if (isloading) { return <ProgressCircular />;   }

  // if (data.length == 0) return <div>Loading...</div>;

  if (userActive) {
    return (
      <>
        <Container maxWidth="lg" sx={{ m: 2, p: 2, width: "100vw" }}>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
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
                textAlign: "center",
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
                Mascotas Registradas
              </Typography>

              <Grid
                container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <TextField
                  color="primary"
                  value={buscar}
                  onChange={(e) => setBuscar(e.target.value)}
                  type="text"
                  name="buscar"
                  variant="standard"
                  label="Buscar mascota"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />

                <Container maxWidth="lg" sx={{ m: 2, p: 2, width: "80vw" }}>
                  <TablaBasic props={data} columns={columns} buscar={buscar} count={count}/>
                </Container>
              </Grid>
            </Paper>
          </Grid>
        </Container>
      </>
    );
  }
}
