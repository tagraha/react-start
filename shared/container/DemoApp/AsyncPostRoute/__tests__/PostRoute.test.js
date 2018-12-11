/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';
import PostRoute from '../PostRoute';

describe('<PostRoute />', () => {
  test('renders', () => {
    const wrapper = shallow(<PostRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
