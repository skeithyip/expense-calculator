import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MoneyIcon from '@material-ui/icons/AttachMoneyOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Typography from '@material-ui/core/Typography';

import Expense from './Expense';

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      position: 'relative'
    },
    icon: {
      marginRight: theme.spacing.unit * 2
    },
    heroUnit: {
      backgroundColor: theme.palette.background.paper
    },
    heroContent: {
      maxWidth: 600,
      margin: '0 auto',
      padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
    }
  });

type Props = {
  classes: {
    appBar: string;
    icon: string;
    heroUnit: string;
    heroContent: string;
  };
};

const MainLayout: React.FunctionComponent<Props> = ({ classes }) => (
  <React.Fragment>
    <CssBaseline />
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <MoneyIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Expenses
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom>
            Insert expense here
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph>
            Expense per annual/month to be displayed here
          </Typography>
        </div>
      </div>
      <Expense />
    </main>
  </React.Fragment>
);

export default withStyles(styles)(MainLayout);
