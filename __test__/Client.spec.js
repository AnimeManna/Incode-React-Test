import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import {shallow, render, mount} from 'enzyme'

import Client from '../src/components/Client'
import toJson from "enzyme-to-json";

describe('Client components',()=>{
    const mockStore = configureStore()
    const initialState = {
        clientsReducer:{
            clients:[

            ],
            viewClients:[

            ],
            user: {
                general: {
                    firstName: 'Ololoev',
                    lastName: 'Ololevn',
                    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg'
                },
                job: {
                    title: 'DNU',
                    company: 'Incode-Group'
                },
                contact: {
                    email: 'ololoev@gmail.com',
                    phone: '0999201'
                },
                address: {
                    country: 'Ukraine',
                    city: 'Dnepr',
                    street: 'Kazakova',
                    zipCode: '49000'

                }
            }
        }
    }
    const store = mockStore(initialState);
    describe('render()', ()=>{
        test('View client info',()=>{
            const wrapper = shallow (<Client store={store} />)
            const component = wrapper.dive();
            expect(toJson(component)).toMatchSnapshot();
        })
    })
})