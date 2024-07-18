import {
  Box,
  Grid,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ButtonAction from "./Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalBasic() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [identidad, setIdentidad] = useState("");
  const [nombre1, setNombre1] = useState("");
  const [nombre2, setNombre2] = useState("");
  const [apell1, setApell1] = useState("");
  const [apell2, setApell2] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const baseURI = import.meta.env.VITE_BASE_URI;
  const navigate = useNavigate();

  const handleInsert = async () => {
    const datos = {
      propietario_identidad: identidad,
      propietario_nombre1: nombre1,
      propietario_nombre2: nombre2,
      propietario_apell1: apell1,
      propietario_apell2: apell2,
      propietario_telefono: telefono,
      propietario_email: email,
    };
    try {
      const response = await fetch(baseURI + "/api/propietario", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(datos),
      });
      const data = await response.json();
      setOpen(false);
     // navigate ("/animales", {replace: "true"});
    } catch (error) {
      console.error("Error en la API: " + error);
    }
  };

  return (
    <>
      <Box sx={{ pt: 2 }}>
        <IconButton
          onClick={handleOpen}
          color="primary"
          children={<PersonAddIcon />}
        />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              textAlign="center"
            >
              Insertar nuevo propietario
            </Typography>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
            >
              <Grid item>
                <TextField
                  color="primary"
                  value={identidad}
                  onChange={(e) => setIdentidad(e.target.value)}
                  type="number"
                  name="identidad"
                  variant="standard"
                  label="No. de Identidad"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={nombre1}
                  onChange={(e) => setNombre1(e.target.value)}
                  type="text"
                  name="nombre1"
                  variant="standard"
                  label="Nombre"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={nombre2}
                  onChange={(e) => setNombre2(e.target.value)}
                  type="text"
                  name="nombre2"
                  variant="standard"
                  label="2do Nombre"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={apell1}
                  onChange={(e) => setApell1(e.target.value)}
                  type="text"
                  name="apell1"
                  variant="standard"
                  label="1er Apellido"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={apell2}
                  onChange={(e) => setApell2(e.target.value)}
                  type="text"
                  name="apell2"
                  variant="standard"
                  label="2do Apellido"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  color="primary"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  type="number"
                  name="telefono"
                  variant="standard"
                  label="Telefono"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  color="primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  variant="standard"
                  label="Email"
                  sx={{ mt: 1.5, m: 1.5 }}
                  required
                />
              </Grid>
              <Stack
                display="flex"
                direction="row"
                justifyContent="center"
                spacing={4}
              >
                <ButtonAction
                  onClick={handleClose}
                  color="inherit"
                  variant="outlined"
                  texto="Close"
                />
                <ButtonAction
                  onClick={handleInsert}
                  color="primary"
                  variant="contained"
                  texto="Insertar"
                />
              </Stack>
            </Grid>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
