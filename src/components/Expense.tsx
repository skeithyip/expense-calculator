import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';

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

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

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
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}>
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Insert form content
            </Typography>
          </div>
        </Modal>
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
