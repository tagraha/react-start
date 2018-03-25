/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import HomeRoute from '../HomeRoute';

describe('<HomeRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
