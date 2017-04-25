import 'react-native';
import React from 'react';
import Index from '../app/index.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Mock the ListView as it does not add unique keys for children elements
// when sections are used. Technique found here:
// https://github.com/facebook/jest/issues/1398#issuecomment-239172001
jest.mock('ListView', () => {
  return require('react').createClass({
    statics: {
      DataSource: require.requireActual('ListView').DataSource,
    },
    render() {
      return require('react').createElement('ListView', this.props, this.props.children);
    }
  });
});

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});
