import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

export default function LinearColor() {
  return (
    <Stack sx={{ color: "grey.500", justifyContent: "center" }} spacing={2}>
      <LinearProgress color="success" />
    </Stack>
  );
}
