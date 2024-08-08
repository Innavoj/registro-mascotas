import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Stack,
  Typography,
  Pagination,
  TablePagination,
  Box,
  IconButton,
} from "@mui/material";
import ButtonAction from "./Button";
import EnviaAlertas from "./Alert";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import EditarMascotaPages from "../pages/editarmascota";

export default function BasicTable({ props, columns, buscar, count }) {
  const [page, setPage] = useState(1);
  const [alerta, setAlerta] = useState(false);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const limitPage = import.meta.env.VITE_LIMIT_PAGE;
  const baseURI = import.meta.env.VITE_BASE_URI;
  const navigate = useNavigate();

  useEffect(() => {
    const start = (page - 1) * limitPage;
    const end = page * limitPage;

    setDataToDisplay(props.rows.slice(start, end));
  }, [page]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  const OnPrevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const OnNextPage = () => {
    if (page === Math.ceil(props.rows.length / limitPage)) return;
    setPage((prev) => prev + 1);
  };

  const renderMascotas = () => {
    let dataFiltred = dataToDisplay;

    if (props.rows.length > 0) {
      dataFiltred = dataFiltred.filter((item) =>
        item.animal_nombre.toLocaleLowerCase().includes(buscar)
      );
    }

    const handleClickDelete = async (id) => {
      try {
        const response = await fetch(baseURI + "/api/animal/" + id, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const datos = await response.json();
        setAlerta(true);
        setInterval(location.reload(), 10000);
      } catch (error) {
        alert("Error en la API " + error);
      }
    };

    return dataFiltred.map((e) => (
      <TableRow
        key={e.animal_id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell align="center">{e.animal_historia}</TableCell>
        <TableCell align="center">{e.animal_nombre}</TableCell>
        <TableCell align="center">{e.animal_especie}</TableCell>
        <TableCell align="center">{e.animal_raza}</TableCell>
        <TableCell align="center">{e.animal_edad}</TableCell>
        <TableCell align="center">{e.animal_caracter}</TableCell>
        <IconButton
          onClick={() => handleClickDelete(e.animal_id)}
          color="error"
          children={<DeleteIcon />}
        />
        <Link to={"/editarmascota/" + e.animal_id}>
          <IconButton color="success" children={<EditIcon />} />
        </Link>
      </TableRow>
    ));
  };

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* {console.log(columns)} */}
            {columns.map((e, index) => (
              <TableCell align="center" key={index}>
                {e.headerName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{renderMascotas()}</TableBody>
      </Table>
      <Typography sx={{ pt: 2 }}>Pàgina: {page}</Typography>
      <Stack
        spacing={2}
        sx={{
          pt: 2,
          pb: 2,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Pagination
          color="warning"
          variant="outlined"
          shape="rounded"
          count={count}
          page={page}
          onChange={handleChange}
        />
      </Stack>
      {alerta && (
        <EnviaAlertas
          severity="success"
          texto="Se ha Borrado Correctamente"
          alert={alerta}
        />
      )}
    </TableContainer>
  );
}
