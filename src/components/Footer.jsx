import {
  AppBar,
  Box,
  Container,
  Divider,
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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const iconos = [
  {
    title: "WhatsApp",
    linked: "https://wa.link/ab44l4",
    icon: <WhatsAppIcon />,
  },
  {
    title: "LinkedIn",
    linked: "https://www.linkedin.com/in/innavojaruges/",
    icon: <LinkedInIcon />,
  },
  {
    title: "GitHub",
    linked: "https://www.github.com/Innavoj",
    icon: <GitHubIcon />,
  },
];

export default function Footer() {
  return (
    <>
     
      <footer>
        <Container maxWidth="lg" sx={{ m: 2, p: 2, width: "100vw" }}>
          {/* <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: 2,
              margin: 2,
              flexWrap: "wrap",
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
          </Grid> */}
          <Divider></Divider>
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
            {iconos.map((i) => (
              <Grid item sx={{ m: 1.5, textAlign: "center" }} key={i.title}>
                <Link to={i.linked}>
                  <IconButton children={i.icon} size="large"></IconButton>
                </Link>
              </Grid>
            ))}
          </Grid>
          
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",

              flexWrap: "wrap",
            }}
          >
            <Grid item sx={{ m: 1.5, textAlign: "center" }}>
              <Typography className="footer-letter">
                Innavoj Aruges © Derechos Reservados. Version 1.0 -{" "}
                {new Date().getFullYear()}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </footer>

    </>
  );
}
