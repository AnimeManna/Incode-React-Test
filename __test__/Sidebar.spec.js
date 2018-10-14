import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import {shallow, render, mount} from 'enzyme'
import thunk from 'redux-thunk'

import Sidebar from '../src/components/Sidebar'
import toJson from "enzyme-to-json";

describe('Sidebar component', () => {
    const middelwares = [thunk]
    const mockStore = configureStore(middelwares)
    const initialState = {
        clientsReducer: {
            clients: [],
            user: {},
            viewClients: [
                {
                    general: {
                        firsName: 'Test Name',
                        lastName: 'Test LastName',
                        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg'
                    },
                    job: {
                        title: 'Test incorporation'
                    },
                    id: 0
                }
            ]

        }
    }
    const store = mockStore(initialState);
    describe('render', () => {
        test('View sidebar clients', () => {
            const wrapper = shallow(<Sidebar store={store}/>)
            const component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot();
        })
    })

})