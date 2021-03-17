import React from 'react';
import useGlobalStyles from '../assets/styles/global';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function LogsStatistics(props) {
    const classesBase = useGlobalStyles();

    return (
        <Card>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={`${classesBase.paper} ${classesBase.info}`}>{`Infos: ${props.infoLogsCount}`}</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={`${classesBase.paper} ${classesBase.warning}`}>{`Warnings: ${props.warningLogsCount}`}</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={`${classesBase.paper} ${classesBase.error}`}>{`Errors: ${props.errorLogsCount}`}</Paper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}