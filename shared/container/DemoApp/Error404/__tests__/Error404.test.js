/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Error404 from '../index';

configure({ adapter: new Adapter() });

describe('<Error404 />', () => {
  test('renders', () => {
    const staticContext = {};
    const wrapper = shallow(<Error404 staticContext={staticContext} />);
    expect(wrapper).toMatchSnapshot();
    expect(staticContext.missed).toBeTruthy();
  });
});
