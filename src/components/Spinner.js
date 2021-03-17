import React from 'react';
import { CircularProgress } from '@material-ui/core';
import useGlobalStyles from '../assets/styles/global';

export default function Spinner() {
    const classes = useGlobalStyles();

    return (
        <div className={classes.spinnerWrapper}><CircularProgress /></ div>
    );
}