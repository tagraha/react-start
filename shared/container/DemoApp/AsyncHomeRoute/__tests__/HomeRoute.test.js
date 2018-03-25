/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomeRoute from '../HomeRoute';

configure({ adapter: new Adapter() });

describe('<HomeRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<HomeRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
