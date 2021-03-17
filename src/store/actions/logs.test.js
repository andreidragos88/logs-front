import { getLogs } from './logs.js';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import * as types from '../constants/actionTypes';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

var mock = new MockAdapter(axios);

mock.onGet(`http://localhost:8080/logs?page=0`).reply(200, {
    data: []
});

const store = mockStore({})

describe('async actions', () => {
    beforeEach(() => store.clearActions());

    afterEach(() => mock.restore());

    it('should get FETCH_LOGS_START and FETCH_LOGS_SUCCESS', () => {
        const expectedActions = [
            { type: types.FETCH_LOGS_START },
            { type: types.FETCH_LOGS_SUCCESS, logs: [] }
        ];

        return store.dispatch(getLogs(0)).then(() => expect(store.getActions()).toEqual(expectedActions));
    })
})