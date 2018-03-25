/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AboutRoute from '../AboutRoute';

configure({ adapter: new Adapter() });

describe('<AboutRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<AboutRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
