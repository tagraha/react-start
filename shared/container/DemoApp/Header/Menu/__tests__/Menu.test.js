/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Menu from '../index';

configure({ adapter: new Adapter() });

describe('<Home />', () => {
  test('renders', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper).toMatchSnapshot();
  });
});
