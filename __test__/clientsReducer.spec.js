import clientsReducer from '../src/reducers/clientsReducer'

import {XHR_CLIENTS_SUCCESS} from "../src/actionsType/ActionTypes";

describe('clientsReducer', ()=>{
    describe('InitalState',()=>{
        test('isCorrect',()=>{
            const action = {}
            const initialState={
                user:{},
                clients:[],
                viewClients:[]
            }
            expect(clientsReducer(undefined, action)).toEqual(initialState)
        })
    })

    describe('XHR_CLIENTS_SUCCEESS',()=>{
        test('returns the correct state',()=>{
            const action = {type:XHR_CLIENTS_SUCCESS, payload:[{test:'test'}]}
            expect(clientsReducer(undefined, action)).toMatchSnapshot()
        })
    })
})