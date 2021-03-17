import * as actionTypes from '../constants/actionTypes';

const initialState = {
    logs: [],
    infoLogsCount: 0,
    warningLogsCount: 0,
    errorLogsCount: 0,
    loading: false,
    totalPages: 0
};

const reducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case actionTypes.FETCH_LOGS_START:
            newState = {
                ...state,
                loading: true
            };
            break;

        case actionTypes.FETCH_LOGS_SUCCESS:
            const infoLogsCount = action.logs.filter((val) => (val.severity === 'INFO')).length;
            const warningLogsCount = action.logs.filter((val) => (val.severity === 'WARNING')).length;
            const errorLogsCount = action.logs.filter((val) => (val.severity === 'ERROR')).length;

            newState = {
                ...state,
                logs: [...state.logs, ...action.logs],
                loading: false,
                totalPages: action.totalPages,
                infoLogsCount: state.infoLogsCount + infoLogsCount,
                warningLogsCount: state.warningLogsCount + warningLogsCount,
                errorLogsCount: state.errorLogsCount + errorLogsCount
            };
            break;

        case actionTypes.FETCH_LOGS_FAIL:
            newState = {
                ...state,
                loading: false
            };
            break;

        default:
            newState = state;
    }

    return newState;
};

export default reducer;