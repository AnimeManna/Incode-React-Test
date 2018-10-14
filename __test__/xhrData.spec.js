import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import {xhrData} from "../src/actions/xhrData";

import {XHR_CLIENTS_START} from "../src/actionsType/ActionTypes";

const middelwares = [thunk]
const mockStore = configureStore(middelwares)

describe('xhrData_actions',()=>{
    const initialState ={}
    const store = mockStore(initialState);
    test('xhrData Disaptch',()=>{
        store.dispatch(xhrData());

        const actions = store.getActions();
        expect(actions).toMatchSnapshot()
    })

})