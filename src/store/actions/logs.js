import * as logsConstants from '../constants/actionTypes';
import { getAll } from '../../services/logs';

export const getLogs = (page) => (dispatch) => {
    dispatch(loading());
    return getAll(page)
        .then(logs => dispatch({
            type: logsConstants.FETCH_LOGS_SUCCESS,
            logs: logs.data,
            totalPages: logs.totalPages
        }))
        .catch(error => dispatch(failure(error.toString())));
};

const failure = (error) => ({ type: logsConstants.FETCH_LOGS_FAIL, error });

const loading = () => ({ type: logsConstants.FETCH_LOGS_START });
