import { Button } from "@mui/material";

export default function ButtonAction({onClick, color, variant, texto}) {
    return (
      <>
        <Button onClick={onClick} color={color} variant={variant}>{texto}</Button>
      </>
    )
  };