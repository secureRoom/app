import React from 'react';
import App from '../Components/App.jsx';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  it('Should have 2 buttons', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });

  it('Button with class .create_chat', () => {
    expect(wrapper.find('button.create_chat')).toHaveLength(1);
  });

  it('Button with class .join_chat', () => {
    expect(wrapper.find('button.join_chat')).toHaveLength(1);
  });
});