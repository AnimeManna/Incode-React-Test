import React from 'react'
import Home from '../src/components/Home'
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import {shallow} from 'enzyme'

describe('<Home />', ()=>{
    describe('render()', ()=>{
        test('render the components',()=>{})
        const wrapper = shallow(<Home />)
        const component = wrapper.dive()

        expect(toJson(component)).toMathSnapshot();
    })
})



