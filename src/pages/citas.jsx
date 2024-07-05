import * as React from "react";
import dayjs from "dayjs";
//import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Container, Typography } from "@mui/material";
import { DesktopDatePicker, MobileDatePicker } from "@mui/x-date-pickers";

export default function CitasPages() {
  const [value, setValue] = React.useState(null);

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 2, textAlign: "center" }}>
        <Container maxWidth="xs">
          <Typography variant="h4" color="orange">
            {" "}
            Reserve su Cita
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={[
                "DatePicker",
                "DesktopDatePicker",
                "MobileDatePicker",
              ]}
            >
              <DemoItem label="Elija la fecha de consulta">
                <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Container>
      </Box>
    </>
  );
}
