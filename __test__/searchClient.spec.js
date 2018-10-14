import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import {searchClient} from '../src/actions/searchClient'

import {SEARCH_CLIENT} from "../src/actionsType/ActionTypes";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('searchClint_actions', ()=>{

    const initialState = {
    }
    const store = mockStore(initialState)

    test('dispatch searchClient',()=>{
        store.dispatch(searchClient('test'));

        const actions = store.getActions();
        expect(actions).toMatchSnapshot();
    })


})