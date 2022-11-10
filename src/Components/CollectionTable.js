import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tableimg from "./Images/smalllogo2.png";
import Tablecheck from "./Images/check-icon.png";
import Star from "./Images/star.png"
import "./CollectionTable.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>COLLECTION</TableCell>
            <TableCell align="right">VOLUME</TableCell>
            <TableCell align="right">% CHANGE</TableCell>
            <TableCell align="right">FLOOR PRICE</TableCell>
            <TableCell align="right">SALES</TableCell>
            <TableCell align="right">% UNIQUE OWNERS</TableCell>
            <TableCell align="right">% ITEMS LISTED</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <span style={{marginRight: "2rem"}}>1</span><img src={Tableimg} alt=""/><span>RENGA</span><img src={Tablecheck} alt=''/>
              </TableCell>
              <TableCell align="right"><span>3.09 ETH</span></TableCell>
              <TableCell align="right"><span>-72%</span></TableCell>
              <TableCell align="right"><span>12.34 ETH</span></TableCell>
              <TableCell align="right"><span>-</span></TableCell>
              <TableCell align="right"><span>52%<br/> 945 owners</span></TableCell>
              <TableCell align="right"><span>1,189 ETH<br/> 132 of 1,832</span></TableCell>
              <TableCell align="left"><img src={Star} alt=''/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}