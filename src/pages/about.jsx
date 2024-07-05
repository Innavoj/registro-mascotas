import { Box, Divider, Toolbar, Typography } from "@mui/material";

export default function AboutPages() {
  return (
    <>
      <Box component="main" sx={{ p: 3, textAlign: "center" }}>
        <Toolbar />
        <Typography color="orange" variant="h4">REGVAD agiliza la gestión de tu clínica</Typography>
        <Divider sx={{ mt: 2, mb: 1 }}></Divider>
        <Typography paragraph>
          Con este software veterinario podrás registrar y consultar toda la
          información necesaria para un correcto seguimiento clínico de forma
          fácil y rápida. REGVAD te permite una gestión ágil de las fichas de
          tus mascotas y clientes, visitas e historiales clínicos donde podrás
          registrar fácilmente todos los datos relevantes, entre otros,
          tratamientos, síntomas, alertas, recordatorios. Además podrás archivar
          todo tipo de pruebas: fotos, vídeos, documentos, radiografías.
        </Typography>
        <Typography paragraph>
          REGVAD también cuenta con una completa consulta de
          recordatorios, a través de la cuál podrás saber que cliente ha sido ya
          notificado y por qué método, así como, enviarles dicha notificación a
          través de una carta por correo ordinario, SMS, email o, simplemente,
          identificar que se le ha avisado telefónicamente. Sea cual sea tu
          manera ideal de comunicarte con tus clientes, REGVAD te lo pone fácil
          y te ofrece múltiples métodos para realizar estas notificaciones y
          llevar un seguimiento de las mismas.
        </Typography>
      </Box>
    </>
  );
}
