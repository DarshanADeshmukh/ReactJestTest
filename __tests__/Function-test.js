import 'react-native';
import React from 'react';
import Home from '../Components/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Function Testing',() => {
  const homeInstance = renderer.create(<Home />).getInstance();

  expect(homeInstance.sum(4,4)).toEqual(8);
  expect(homeInstance.substract(4,4)).toEqual(0);
  expect(homeInstance.multiply(4,4)).toEqual(16);
  expect(homeInstance.division(4,4)).toEqual(1);
})

test('State Testing',() => {
  const homeInstance = renderer.create(<Home />).getInstance();

  // Change state Testcase.
  homeInstance.changeComponentState(10);
  expect(homeInstance.state.data).toEqual(60);

  homeInstance.changeComponentStateHeader('React Native Testing Using Jest');
  const actualResult = 'React Native Testing Using Jest';
  expect(homeInstance.state.header).toMatch(actualResult);
})
