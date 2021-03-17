import reducer from './logs';
import * as types from '../constants/actionTypes';

describe('logs reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            logs: [],
            loading: false,
            totalPages: 0,
            infoLogsCount: 0,
            warningLogsCount: 0,
            errorLogsCount: 0
        })
    })

    it('should handle FETCH_LOGS_START', () => {
        expect(
            reducer(undefined, {
                type: types.FETCH_LOGS_START
            })
        ).toEqual({
            errorLogsCount: 0,
            infoLogsCount: 0,
            loading: true,
            logs: [],
            totalPages: 0,
            warningLogsCount: 0
        })
    })

    it('should handle FETCH_LOGS_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.FETCH_LOGS_SUCCESS,
                logs: [{ datetime: '2016-09-20 16:23:10', severity: 'INFO', message: 'Some info message' }],
                totalPages: 1
            })
        ).toEqual({
            loading: false,
            logs: [{ datetime: '2016-09-20 16:23:10', severity: 'INFO', message: 'Some info message' }],
            totalPages: 1,
            infoLogsCount: 1,
            warningLogsCount: 0,
            errorLogsCount: 0
        })
    })

    it('should handle FETCH_LOGS_FAIL', () => {
        expect(
            reducer(undefined, {
                type: types.FETCH_LOGS_FAIL
            })
        ).toEqual({
            errorLogsCount: 0,
            infoLogsCount: 0,
            loading: false,
            logs: [],
            totalPages: 0,
            warningLogsCount: 0
        })
    })
})