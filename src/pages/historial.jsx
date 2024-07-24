import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
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
            <Typography color="orange" fontFamily="serif" variant="h4">
              Historial Médico
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
                  value={enfermedad}
                  onChange={(e) => setEnfermedad(e.target.value)}
                  type="text"
                  name="enfermedad"
                  variant="standard"
                  label="Enfermedad"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={tratamiento}
                  onChange={(e) => setTratamiento(e.target.value)}
                  type="text"
                  name="tratamiento"
                  variant="standard"
                  label="Tratamiento"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={vacunas}
                  onChange={(e) => setVacunas(e.target.value)}
                  type="text"
                  name="vacunas"
                  variant="standard"
                  label="Vacunas"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={cirujias}
                  onChange={(e) => setCirujias(e.target.value)}
                  type="text"
                  name="cirujias"
                  variant="standard"
                  label="Cirujias"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={radiografias}
                  onChange={(e) => setRadiografias(e.target.value)}
                  type="file"
                  name="radiografias"
                  variant="standard"
                  label="Radiografias"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item sx={{ width: "100%" }}>
                <TextField
                  color="primary"
                  value={analisisLab}
                  onChange={(e) => setAnalisisLab(e.target.value)}
                  fullWidth
                  type="text"
                  name="analisisLab"
                  variant="outlined"
                  label="Analisis Laboratorio"
                  sx={{ width: "90%", mt: 1.5, mb: 1.5, m: 1.5 }}
                  required
                  multiline
                  maxRows="4"
                />
              </Grid>
            </Grid>
            <Grid
              sx={{
                mt: 1.5,
                mb: 1.5,
                m: 1.5,
                display: "flex",
                flexDirections: "column",
              }}
            >
              <ButtonAction
                color="info"
                variant="contained"
                texto="Aceptar"
                endIcon={<SendIcon />}
              />
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </>
  );
}
