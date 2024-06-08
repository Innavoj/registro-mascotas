import { Button } from "@mui/material";

export default function ButtonAction({fullWidth, type, onClick, color, variant, texto, startIcon, endIcon}) {
    return (
      <>
        <Button  type={type} onClick={onClick} color={color} variant={variant} startIcon={startIcon} endIcon={endIcon}>{texto}</Button>
      </>
    )
  };