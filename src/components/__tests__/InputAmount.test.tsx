import * as React from 'react';
import * as enzyme from 'enzyme';
import NumberFormat from 'react-number-format';

import InputAmount from '../InputAmount';

it('should render NumberFormat', () => {
  const props = {
    inputRef: jest.fn(),
    id: 'id1',
    onChange: jest.fn()
  };
  const wrapper = enzyme.shallow(<InputAmount {...props} />);

  expect(wrapper.is(NumberFormat)).toBeTruthy();
});

it('should handle onValueChange', () => {
  const props = {
    inputRef: jest.fn(),
    id: 'id1',
    onChange: jest.fn()
  };
  const wrapper = enzyme.shallow(<InputAmount {...props} />);
  wrapper.simulate('valueChange', { value: '1234' });

  expect(props.onChange).toHaveBeenCalledTimes(1);
  expect(props.onChange).lastCalledWith({
    target: { id: 'id1', value: '1234' }
  });
});
