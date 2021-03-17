import React from 'react';
import useGlobalStyles from '../assets/styles/global';
import { TableRow, TableCell } from '@material-ui/core';
import showsInViewport from '../hoc/showsInViewport';

/*
 * showsInViewport it is usefull for when there are many logs to render
 */
export default showsInViewport(function Log(props) {
    const classes = useGlobalStyles();
    let severityClass;

    switch (props.data.severity) {
        case 'WARNING':
            severityClass = classes.warning;
            break;

        case 'ERROR':
            severityClass = classes.error;
            break;

        case 'INFO':
            severityClass = classes.info;
            break;

        default:
            break;
    }

    return (
        <React.Fragment key={props.uuid}>
            <TableCell>{props.data.datetime}</TableCell>
            <TableCell><span className={severityClass}>{props.data.severity}</span></TableCell>
            <TableCell>{props.data.message}</TableCell>
        </React.Fragment>
    );
}, TableRow);