import React from "react";
import { Box, Container, Divider, Grid, Paper, TextField, Toolbar, Typography } from "@mui/material";
import ButtonAction from "../components/Button";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";



export default function HistorialMedicoPages() {

  const [enfermedad, setEnfermedad] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [vacunas, setVacunas] = useState("");
  const [cirujias, setCirujias] = useState("");
  const [radiografias, setRadiografias] = useState("");
  const [analisisLab, setAnalisisLab] = useState("");
  

  return (
    <>
    
    <Box component="main" sx={{ flexGrow: 1, p: 2, textAlign: "center" }}>
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
                  Historial Medico
                </Typography>

                <Box component="form">
                  <TextField
                    color="primary"
                    value={enfermedad}
                    onChange={(e) => setEnfermedad(e.target.value)}
                    fullWidth
                    type="text"
                    name="enfermedad"
                    variant="standard"
                    label="Enfermedad"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={tratamiento}
                    onChange={(e) => setTratamiento(e.target.value)}
                    fullWidth
                    type="text"
                    name="tratamiento"
                    variant="standard"
                    label="Tratamiento"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={vacunas}
                    onChange={(e) => setVacunas(e.target.value)}
                    fullWidth
                    type="text"
                    name="vacunas"
                    variant="standard"
                    label="Vacunas"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={cirujias}
                    onChange={(e) => setCirujias(e.target.value)}
                    fullWidth
                    type="text"
                    name="cirujias"
                    variant="standard"
                    label="Cirujias"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={radiografias}
                    onChange={(e) => setRadiografias(e.target.value)}
                    fullWidth
                    type="file"
                    name="radiografias"
                    variant="standard"
                    label="Radiografias"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <TextField
                    color="primary"
                    value={analisisLab}
                    onChange={(e) => setAnalisisLab(e.target.value)}
                    fullWidth
                    type="text"
                    name="analisisLab"
                    variant="standard"
                    label="Analisis Laboratorio"
                    sx={{ mt: 1.5, mb: 1.5 }}
                    required
                  />
                  <Divider sx={{ mt: 2, mb: 1 }}></Divider>
                  <ButtonAction
                    
                    color="info"
                    variant="contained"
                    texto="Aceptar"
                    endIcon={<SendIcon />}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    
    </>
  );
}