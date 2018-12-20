import * as React from 'react';
import * as enzyme from 'enzyme';
import Fab from '@material-ui/core/Fab';
import Modal from '@material-ui/core/Modal';

import { Expense, Props, State } from '../Expense';

describe('Expense', () => {
  it('should render Fab and Modal', () => {
    const props: Props = { classes: { button: '', paper: '' } };
    const wrapper = enzyme.shallow(<Expense {...props} />);

    expect(wrapper.find(Fab)).toHaveLength(1);
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  it('should handle Fab onClick', () => {
    const props: Props = { classes: { button: '', paper: '' } };
    const wrapper = enzyme.shallow(<Expense {...props} />);
    wrapper.find(Fab).simulate('click');

    const state = wrapper.state() as State;
    expect(state.open).toBeTruthy();
  });

  it('should handle Modal onClick', () => {
    const props: Props = { classes: { button: '', paper: '' } };
    const wrapper = enzyme.shallow(<Expense {...props} />);
    wrapper.find(Fab).simulate('click');
    wrapper.find(Modal).simulate('close');

    const state = wrapper.state() as State;
    expect(state.open).toBeFalsy();
  });
});
