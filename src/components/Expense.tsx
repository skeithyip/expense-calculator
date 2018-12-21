import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';

import ExpenseDetail from './ExpenseDetail';

const styles = (theme: Theme) =>
  createStyles({
    button: {
      position: 'absolute',
      bottom: theme.spacing.unit * 2,
      right: theme.spacing.unit * 2
    },
    paper: {
      position: 'absolute',
      width: theme.spacing.unit * 50,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing.unit * 4
    }
  });

export type State = { open: boolean };
export type Props = { classes: { button: string; paper: string } };

export class Expense extends React.Component<Props, State> {
  state = {
    open: false
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <React.Fragment>
        <Fab
          color="primary"
          className={classes.button}
          aria-label="Add expense"
          onClick={this.handleOpen}>
          <AddIcon />
        </Fab>
        <Typography
          variant="h6"
          align="center"
          color="textPrimary"
          gutterBottom>
          Insert expense table
        </Typography>
        <ExpenseDetail open={open} onClose={this.handleClose} />
      </React.Fragment>
    );
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
}

export default withStyles(styles)(Expense);
