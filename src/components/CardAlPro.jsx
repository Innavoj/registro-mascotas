import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const alimentos = [
  {
    title: "Huesos y raspas",
    img: "/src/assets/img/huesos.jpg",
  },
  {
    title: "Chocolate",
    img: "/src/assets/img/chocolate.jpg",
  },
  {
    title: "Leche",
    img: "/src/assets/img/leche.jpg",
  },
  {
    title: "Uvas y Pasas",
    img: "/src/assets/img/uvas.jpg",
  },
  {
    title: "Aguacate",
    img: "/src/assets/img/aguacate.jpg",
  },
  {
    title: "Ajos",
    img: "/src/assets/img/ajos.jpg",
  },
  {
    title: "Cebollas",
    img: "/src/assets/img/cebollas.jpg",
  },
  {
    title: "Bebidas Alchòlicas",
    img: "/src/assets/img/cerveza.jpg",
  },
  {
    title: "Cafeina y Teina",
    img: "/src/assets/img/cafe.jpg",
  },
  {
    title: "Frutos Secos",
    img: "/src/assets/img/secos.jpg",
  },
  {
    title: "Atùn en Lata",
    img: "/src/assets/img/atun.jpg",
  },
];
export default function CardAlPro() {
  return alimentos.map((item) => (
    <Card sx={{display: 'flex', maxWidth: 345, m: 4}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
}
