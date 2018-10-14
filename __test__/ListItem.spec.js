import React from 'react'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import {shallow, render, mount} from 'enzyme'

import ListItem from '../src/components/ListItem'
import toJson from "enzyme-to-json";

describe('ListItem container', () => {
    const props = {
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
    const {general} = props.user
    describe('render()',()=>{

        test('render the component',()=>{
            const wrapper = shallow(<ListItem icon="user" firstText={general.firstName} secondText={general.lastName}/>)
            const container = wrapper.dive()

            expect(toJson(container)).toMatchSnapshot();
        })
    })

})

