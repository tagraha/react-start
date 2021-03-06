import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import PostRoute from '../PostRoute';
import { postMock } from './../../../../redux/initialStates';

describe('<PostRoute />', () => {
  test('renders', () => {
    const mockStore = configureStore();
    const store = mockStore(postMock);
    const wrapper = shallow(<PostRoute store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
