/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Error404 from '../Error404';
import { errorMock } from './../../../../redux/initialStates';

describe('<Error404 />', () => {
  test('renders', () => {
    const mockStore = configureStore();
    const store = mockStore(errorMock);
    const wrapper = shallow(<Error404 store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
