/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import AboutRoute from '../AboutRoute';

describe('<AboutRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<AboutRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
