import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectBoxes(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div style = {{fontSize: '30px', fontWeight: 'light', margin: '20px',display: 'flex', flexDirection: 'column', alignItems: 'center', width:'auto'}}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label" style = {{color: 'white',fontSize: '20px'}}>
          {props.label}
        </InputLabel>
        <Select  style = {{color: 'white',fontSize: '20px'}}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          labelWidth={labelWidth}
        >
          <MenuItem value={10} >{props.option1} </MenuItem>
          <MenuItem value={20}>{props.option2} </MenuItem>
          <MenuItem value={30}>{props.option3} </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}