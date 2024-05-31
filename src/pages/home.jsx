import { Box, Container, Grid, Typography } from "@mui/material";
import CardAlPro from "../components/CardAlPro";

export default function HomePages() {
  return (
    <>
      <Box component='main' sx={{ flexGrow: 1, p: 3, pt: 8 }}>
        <Container container >
          <Grid container sx={{alignItems: 'center', justifyContent: 'center'}}>
            <Grid item>
              <Typography variant="h3">
                Alimentos prohibidos para tus mascotas
              </Typography>
              <Typography paragraph>
                Nuestras mascotas tienen un organismo distinto al nuestro; por
                lo que puede resultar que alimentos que son buenos para ti, no
                lo sean para èl. Toma en cuenta esta lista de alimentos
                prohibidos para no poner en riesgo la salud de tu mascota.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container>
            <Grid container >
                <Grid item sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
                    <CardAlPro/>
                </Grid>
            </Grid>
        </Container>
      </Box>
    </>
  );
}