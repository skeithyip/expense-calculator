import * as React from 'react';
import * as enzyme from 'enzyme';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';

import { ExpenseDetail } from '../ExpenseDetail';

const filterId = (
  wrapper: any,
  id: string
): enzyme.ShallowWrapper<TextFieldProps> =>
  wrapper.find(TextField).filterWhere((e: any) => e.props().id === id);

it('should render Dialog, TextField', () => {
  const props = {
    open: false,
    onClose: jest.fn(),
    classes: { leftIcon: 'leftIcon' },
    addExpense: jest.fn()
  };
  const wrapper = enzyme.shallow(<ExpenseDetail {...props} />);
  expect(wrapper.find(Dialog)).toHaveLength(1);
  expect(filterId(wrapper, 'name')).toHaveLength(1);
  expect(filterId(wrapper, 'amount')).toHaveLength(1);
  expect(filterId(wrapper, 'reference')).toHaveLength(1);
});

it('should handle onChange for name', () => {
  const props = {
    open: false,
    onClose: jest.fn(),
    classes: { leftIcon: 'leftIcon' },
    addExpense: jest.fn()
  };
  const wrapper = enzyme.shallow(<ExpenseDetail {...props} />);
  filterId(wrapper, 'name').simulate('change', {
    target: { id: 'name', value: 'name1' }
  });

  expect(filterId(wrapper, 'name').props().value).toBe('name1');
});

it('should handle onChange for amount', () => {
  const props = {
    open: false,
    onClose: jest.fn(),
    classes: { leftIcon: 'leftIcon' },
    addExpense: jest.fn()
  };
  const wrapper = enzyme.shallow(<ExpenseDetail {...props} />);
  filterId(wrapper, 'amount').simulate('change', {
    target: { id: 'amount', value: '1234' }
  });

  expect(filterId(wrapper, 'amount').props().value).toBe('1234');
});

it('should handle onChange for reference', () => {
  const props = {
    open: false,
    onClose: jest.fn(),
    classes: { leftIcon: 'leftIcon' },
    addExpense: jest.fn()
  };
  const wrapper = enzyme.shallow(<ExpenseDetail {...props} />);
  filterId(wrapper, 'reference').simulate('change', {
    target: { id: 'reference', value: 'reference1' }
  });

  expect(filterId(wrapper, 'reference').props().value).toBe('reference1');
});

it('should handle Dialog onClose', () => {
  const props = {
    open: false,
    onClose: jest.fn(),
    classes: { leftIcon: 'leftIcon' },
    addExpense: jest.fn()
  };
  const wrapper = enzyme.shallow(<ExpenseDetail {...props} />);
  filterId(wrapper, 'name').simulate('change', {
    target: { id: 'name', value: 'name1' }
  });
  filterId(wrapper, 'amount').simulate('change', {
    target: { id: 'amount', value: '1234' }
  });
  filterId(wrapper, 'reference').simulate('change', {
    target: { id: 'reference', value: 'reference1' }
  });
  wrapper.find(Dialog).simulate('close');

  expect(props.onClose).toHaveBeenCalledTimes(1);
  expect(filterId(wrapper, 'name').props().value).toBe('');
  expect(filterId(wrapper, 'amount').props().value).toBe('');
  expect(filterId(wrapper, 'reference').props().value).toBe('');
});

it('should handle Button onAdd', () => {
  const props = {
    open: false,
    onClose: jest.fn(),
    classes: { leftIcon: 'leftIcon' },
    addExpense: jest.fn()
  };
  const wrapper = enzyme.shallow(<ExpenseDetail {...props} />);
  filterId(wrapper, 'name').simulate('change', {
    target: { id: 'name', value: 'name1' }
  });
  filterId(wrapper, 'amount').simulate('change', {
    target: { id: 'amount', value: '1234' }
  });
  filterId(wrapper, 'reference').simulate('change', {
    target: { id: 'reference', value: 'reference1' }
  });
  wrapper
    .find(Button)
    .filterWhere(e => e.props().color === 'primary')
    .simulate('click');

  expect(props.onClose).toHaveBeenCalledTimes(1);
  expect(filterId(wrapper, 'name').props().value).toBe('');
  expect(filterId(wrapper, 'amount').props().value).toBe('');
  expect(filterId(wrapper, 'reference').props().value).toBe('');
  expect(props.addExpense).toHaveBeenCalledTimes(1);
  expect(props.addExpense).lastCalledWith({
    uuid: expect.any(String),
    name: 'name1',
    amount: 1234,
    reference: 'reference1',
    dateAdded: expect.any(Object)
  });
});
