import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function UserTable({ users }) {
    return (
        <TableContainer >
            <Table sx={{ minWidth: 650, maxWidth: 1000 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell align="right">Age</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {user.username}
                            </TableCell>
                            <TableCell align="right">{user.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </TableContainer>


    )
}

export default UserTable









