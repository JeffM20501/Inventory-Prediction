import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TableRender({rows}) {
    const renderRows=rows.map((row) => (
        <TableRow
        key={row.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
        <TableCell component="th" scope="row">{row.name}</TableCell>
        <TableCell align="right">{row.sku}</TableCell>
        <TableCell align="right">{row.stock}</TableCell>
        <TableCell align="right">{row.demand_forecast}</TableCell>
        <TableCell align="right">{row.stock}</TableCell>
        </TableRow>
    ))
  return (
    <section>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="right">SKU</TableCell>
                    <TableCell align="right">Stock&nbsp;(g)</TableCell>
                    <TableCell align="right">Demand Forecast&nbsp;(g)</TableCell>
                    <TableCell align="right">Risk Status&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {renderRows}
                </TableBody>
            </Table>
        </TableContainer>
    </section>
  )
}

export default TableRender