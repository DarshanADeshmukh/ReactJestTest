import { configure } from 'enzyme'
import 'react-native';
import { shallow, mount } from 'enzyme';
import React from 'react';
import AIndicator from '../Components/AIndicator.js';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

test('Testing Props',() => {
   const ActivityIndicatorComponent = shallow(<AIndicator/>).props();
   console.warn(ActivityIndicatorComponent);
   expect(ActivityIndicatorComponent.style[0].justifyContent).toBe('center');
   expect(ActivityIndicatorComponent.style[0].flex).toBe(1);
   expect(ActivityIndicatorComponent.style[1].flexDirection).toBe('row');
   expect(ActivityIndicatorComponent.style[1].justifyContent).toBe('space-around');
   expect(ActivityIndicatorComponent.style[1].padding).toBe(10);

})
