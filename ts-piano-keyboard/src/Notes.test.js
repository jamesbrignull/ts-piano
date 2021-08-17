import { shallow } from 'enzyme';
import Note, { Black, White } from './Notes';

describe('Note Component', () => {
  const clickHandler = jest.fn();

  const props = {
    color: 'white',
    note: 'C',
    clickHandler,
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Note {...props} />);
  });

  it('should render the White component when color props has a value of "white"', () => {
    expect(wrapper.find(White).exists()).toBe(true);
  });

  it('should render the Black component when color props has a value of "black"', () => {
    expect(wrapper.find(Black).exists()).toBe(false);
    wrapper.setProps({ color: 'black' });
    wrapper.update();
    expect(wrapper.find(Black).exists()).toBe(true);
  });
});
