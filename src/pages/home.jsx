import { Box, Container, Grid, Typography } from "@mui/material";
import CardAlPro from "../components/CardAlPro";

export default function HomePages() {
  return (
    <>
      <Box component='main' sx={{ flexGrow: 1, p: 3}}>
        <Container container >
          <Grid container >
            <Grid item sx={{ pt: 8, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
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
                <Grid item sx={{display: 'flex', flexWrap: 'wrap'}}>
                    <CardAlPro/>
                </Grid>
            </Grid>
        </Container>
      </Box>
    </>
  );
}