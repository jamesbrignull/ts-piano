import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Octave from './Octave';

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  it('should render the component', () => {
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('should render one Octave component when component mounts', () => {
    expect(wrapper.find(Octave)).toHaveLength(1);
  });
});
