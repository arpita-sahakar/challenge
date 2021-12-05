import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function AgeDemographicTable({ result }) {
    return (
        <TableContainer >
            <Table sx={{ minWidth: 650, maxWidth: 1000 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Age</TableCell>
                        <TableCell>Count</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(result).map((age, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {age}
                            </TableCell>
                            <TableCell align="right">{result[age]}</TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>

        </TableContainer>
    )
}

export default AgeDemographicTable
