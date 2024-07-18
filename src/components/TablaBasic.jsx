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
} from "@mui/material";
import ButtonAction from "./Button";

export default function BasicTable({ props, columns, buscar, count }) {
  const [page, setPage] = useState(1);

  const [dataToDisplay, setDataToDisplay] = useState([]);
  const limitPage = import.meta.env.VITE_LIMIT_PAGE;

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

      <Typography sx={{ pt: 2 }}>
        Cantidad Pàginas: {count} - Pàgina: {page}
      </Typography>
      <Box sx={{pt:2, pb:2, display:"flex", flexDirection:"row", justifyContent: 'center'}}>
        <ButtonAction
          onClick={OnPrevPage}
          color="success"
          variant="outlined"
          texto="Prev"
        />
        <ButtonAction
          onClick={OnNextPage}
          color="info"
          variant="outlined"
          texto="Next"
        />
      </Box>
    </TableContainer>
  );
}
