import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'


import Client from '../src/components/Client'

const initalState = {};

const mockStore = configureStore()

let wrapper;
let store;

beforeEach(() => {
    //creates the store with any initial state or middleware needed
    store = mockStore(initialState)
    wrapper = shallow(<Client store={store}/>)
})