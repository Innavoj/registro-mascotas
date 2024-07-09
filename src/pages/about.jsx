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
        <Typography color="orange" variant="h4">REGVAD facilita tu gestión administrativa</Typography>
        <Typography paragraph>
          REGVAD cuenta con funciones específicas para la gestión correcta de la tienda como presupuestos o reservas, 
          y te permitirá llevar de forma separada las ventas realizadas en cada sección. Además del control de stock tradicional, 
          REGVAD te permite ver, de forma simple y gráfica, toda la información de un determinado producto. 
          Tendrás acceso a existencias, pedidos y reservas pendientes, ventas y compras anuales, etc. además de los datos de lotes y caducidades si corresponde. 
          Toda esta información te ayudará a tener unos procesos de compra más eficientes, conseguir un stock óptimo de todos los productos que comercialices 
          y llevar un registro completo de la trazabilidad de aquellos productos que tú consideres necesarios.
        </Typography>
        <Typography color="orange" variant="h4">Porqué usar REGVAD ?</Typography>
        <Typography paragraph>
          <strong>Movilidad:</strong>desde donde estés, en casa, en la clínica, en tus visitas a domicilio. 
          Sólo necesitas un navegador Web y una conexión a internet para llevar tu clínica contigo.
          <Typography>
          <strong>Mínima inversión:</strong> no necesitas un servidor, ni un ordenador potente, ni configurar un complejo sistema de red. 
          Delega los costes de mantenimiento del software y la infraestructura que lo soporta.
          Vercel cuenta con la más avanzada tecnología en la nube, lo que nos permite garantizar un 99.9% de disponibilidad.
          </Typography>
          <Typography>
          <strong>Copias de seguridad y custodia de los datos:</strong> en Vercel realizamos, al menos, una copia de seguridad diaria de tus datos 
          y garantizamos su custodia bajo medidas de seguridad muy estrictas acordes a la legalidad vigente.
          </Typography>
          
        </Typography>
      </Box>
    </>
  );
}
