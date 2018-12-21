import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import DoneIcon from '@material-ui/icons/Done';
import BlockIcon from '@material-ui/icons/Block';
import uuidv1 from 'uuid/v1';

import { addExpense, Payload } from '../actions/expenseActions';
import InputAmount from './InputAmount';

const styles = (theme: Theme) =>
  createStyles({
    leftIcon: {
      marginRight: theme.spacing.unit
    }
  });

type State = {
  uuid?: string;
  name: string;
  amount: string;
  reference: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  classes: { leftIcon: string };
  addExpense: (payload: Payload) => void;
};

class ExpenseDetail extends React.Component<Props, State> {
  state = {
    name: '',
    amount: '',
    reference: ''
  };

  render() {
    const { open, classes } = this.props;
    const { name, amount, reference } = this.state;

    return (
      <Dialog
        aria-labelledby="simple-dialog-title"
        open={open}
        onClose={this.onClose}
        fullWidth={true}
        maxWidth="sm">
        <DialogTitle id="form-dialog-title">Expense Detail</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your expense</DialogContentText>
          <TextField
            margin="dense"
            id="name"
            label="Label"
            type="text"
            value={name}
            onChange={this.onChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="amount"
            label="Amount"
            value={amount}
            onChange={this.onChange}
            fullWidth
            InputProps={{
              inputComponent: InputAmount
            }}
          />
          <TextField
            margin="dense"
            id="reference"
            label="Reference"
            type="text"
            value={reference}
            onChange={this.onChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={this.onClose}>
            <BlockIcon className={classes.leftIcon} />
            Cancel
          </Button>
          <Button color="primary" onClick={this.onAdd}>
            <DoneIcon className={classes.leftIcon} />
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // TODO typescript cant deal with setState properly
    this.setState(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  onClose = () => {
    // cleanup
    this.props.onClose();
    this.setState({ uuid: undefined, name: '', amount: '', reference: '' });
  };

  onAdd = () => {
    const { name, amount, reference } = this.state;
    const payload: Payload = {
      uuid: uuidv1(),
      name,
      amount: +amount,
      reference,
      dateAdded: new Date()
    };

    this.props.addExpense(payload);
    this.onClose();
  };
}

const mapDispatchToProps = { addExpense };

// TODO how to use typescript with redux.compose?
export default withStyles(styles)(
  connect(
    null,
    mapDispatchToProps
  )(ExpenseDetail)
);
export { ExpenseDetail };
