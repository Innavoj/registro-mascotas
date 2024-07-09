import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
//import "../index.css"

const alimentos = [
  {
    title: "Huesos y raspas",
    img: "/img/huesos.jpg",
  },
  {
    title: "Chocolate",
    img: "/img/chocolate.jpg",
  },
  {
    title: "Leche",
    img: "/img/leche.jpg",
  },
  {
    title: "Uvas y Pasas",
    img: "/img/uvas.jpg",
  },
  {
    title: "Aguacate",
    img: "/img/aguacate.jpg",
  },
  {
    title: "Ajos",
    img: "/img/ajos.jpg",
  },
  {
    title: "Cebollas",
    img: "/img/cebollas.jpg",
  },
  {
    title: "Bebidas Alchòlicas",
    img: "/img/cerveza.jpg",
  },
  {
    title: "Cafeina y Teina",
    img: "/img/cafeina.jpg",
  },
  {
    title: "Frutos Secos",
    img: "/img/secos.jpg",
  },
  {
    title: "Atùn en Lata",
    img: "/img/atun.jpg",
  },
];


export default function CardAlPro() {
  return alimentos.map((item) => (
    <Card className="Card" key={item.title} sx={{display: 'flex', maxWidth: 350, m: 4}}>
      <CardActionArea >
        <CardMedia 
          component="img"
          height="140"
          image={item.img}
          alt={item.title}
        />
        <CardContent >
          <Typography sx={{ textAlign: 'center'}} variant="h6" component="div">
            {item.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ));
}
