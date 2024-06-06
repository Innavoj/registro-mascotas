import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <AppBar className="footer" component="footer" position="static">
        <footer>
          <Container maxWidth="lg" sx={{ m: 2, p: 2, width: "100vw" }}>
            <Grid
              contained
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                margin: 2,
                flexWrap: "wrap"
              }}
            >
              <Grid item sx={{ m: 4, textAlign: "center" }}>
                <Typography variant="h5" color="orange">
                  Nosotros
                </Typography>
                <Typography>Edificio 14. Rpto Versalles</Typography>
                <Typography>Santiago de Cuba</Typography>
              </Grid>
              <Grid item sx={{ m: 4, textAlign: "center" }}>
                <Typography variant="h5" color="orange">
                  Horario de Atenciòn
                </Typography>
                <Typography>Lunes a Viernes 09:00 hrs - 16:00 hrs</Typography>
                <Typography>Sàbados 09:00 hrs - 13:00 hrs</Typography>
              </Grid>
              <Grid item sx={{ m: 4, textAlign: "center" }}>
                <Typography variant="h5" color="orange">
                  Contacto
                </Typography>
                <Typography>innavojaruges2371974@gmail.com</Typography>
                <Typography>+53 51803204</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
              }}
            >
              <Grid item sx={{ m: 2, textAlign: "center" }}>
                <WhatsAppIcon color="success" />
              </Grid>
              <Grid item sx={{ m: 2, textAlign: "center" }}>
                <InstagramIcon color="warning" />
              </Grid>
              <Grid item sx={{ m: 2, textAlign: "center" }}>
                <FacebookIcon color="primary" />
              </Grid>
              <Grid item sx={{ m: 2, textAlign: "center" }}>
                <YouTubeIcon color="error" />
              </Grid>
            </Grid>
          </Container>
        </footer>
      </AppBar>
    </>
  );
}
