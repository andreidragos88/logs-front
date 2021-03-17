import React from 'react';
import Log from './Log';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from './Spinner';
import { Box } from '@material-ui/core';

export default function Logs(props) {
    return (
        <Box mt={2}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Datetime</TableCell>
                            <TableCell>Severity</TableCell>
                            <TableCell>Message</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(props.logs.map((log) => (
                            <Log data={log} key={log.uuid} />
                        )))}
                    </TableBody>
                </Table>
                {props.loading && <Spinner />}
            </TableContainer>
        </Box>
    );
}