import * as React from 'react';
import * as enzyme from 'enzyme';
import Fab from '@material-ui/core/Fab';

import { Expense, Props } from '../Expense';
import ExpenseDetail from '../ExpenseDetail';

describe('Expense', () => {
  it('should render Fab and ExpenseDetail', () => {
    const props: Props = { classes: { button: '', paper: '' } };
    const wrapper = enzyme.shallow(<Expense {...props} />);

    expect(wrapper.find(Fab)).toHaveLength(1);
    expect(wrapper.find(ExpenseDetail)).toHaveLength(1);
  });

  it('should handle Fab onClick', () => {
    const props: Props = { classes: { button: '', paper: '' } };
    const wrapper = enzyme.shallow(<Expense {...props} />);
    expect(wrapper.find(ExpenseDetail).props().open).toBeFalsy();
    wrapper.find(Fab).simulate('click');

    expect(wrapper.find(ExpenseDetail).props().open).toBeTruthy();
  });

  it('should handle ExpenseDetail onClose', () => {
    const props: Props = { classes: { button: '', paper: '' } };
    const wrapper = enzyme.shallow(<Expense {...props} />);
    wrapper.find(Fab).simulate('click');
    expect(wrapper.find(ExpenseDetail).props().open).toBeTruthy();

    wrapper.find(ExpenseDetail).simulate('close');
    expect(wrapper.find(ExpenseDetail).props().open).toBeFalsy();
  });
});
