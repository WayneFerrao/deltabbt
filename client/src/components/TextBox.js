import React from 'react';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

export default function TextBox(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>

      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          label = {props.TextFieldLabel}
          variant="outlined"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
    </form>
  );
}