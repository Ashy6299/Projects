import React from "react";
import {
  TableContainer,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Table,
} from "@mui/material";

function Tables() {
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell align='right'>First Name</TableCell>
              <TableCell align='right'>Surname</TableCell>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='right'>Password</TableCell>
              <TableCell align='right'>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {}
              </TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Tables;
