import 'react-native';
import React from 'react';
import Home from '../Components/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Home Snapshot Testing',() => {
  const homeSnap = renderer.create(
    <Home />
  )
  expect(homeSnap).toMatchSnapshot();
})
