import LoadMore from '../components/LoadMore';
import useGlobalStyles from '../assets/styles/global';
import { getLogs } from '../store/actions/logs';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect, useCallback } from 'react';
import Logs from '../components/Logs';
import LogsStatistics from '../components/LogsStatistics';
import { Typography, Box } from '@material-ui/core';

function Home() {
    const classes = useGlobalStyles();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.logs.loading);
    const logs = useSelector(state => state.logs.logs);
    const totalPages = useSelector(state => state.logs.totalPages);
    const infoLogsCount = useSelector(state => state.logs.infoLogsCount);
    const warningLogsCount = useSelector(state => state.logs.warningLogsCount);
    const errorLogsCount = useSelector(state => state.logs.errorLogsCount);
    const [page, setPage] = useState(0);

    const onNextPageHandler = useCallback(() => {
        setPage(page + 1);
    }, [page]);

    const searchResults = (newPage) => {
        dispatch(getLogs(newPage));
    };

    useEffect(() => {
        searchResults(page);
    }, [page]);

    const showLoadMoreButton = page < totalPages;

    return (
        <div className={classes.main}>
            <Box mt={2} mb={2}>
                <Typography variant="h4">Logs</Typography>
            </Box>
            <LogsStatistics
                infoLogsCount={infoLogsCount}
                warningLogsCount={warningLogsCount}
                errorLogsCount={errorLogsCount}
            />
            <Logs
                logs={logs}
                loading={loading}
            />
            {showLoadMoreButton && <LoadMore onNext={onNextPageHandler} /> }
        </div>
    );
}

export default Home;