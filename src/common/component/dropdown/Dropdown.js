import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];
  
const Dropdown = () => {
    const [ruleSetName, setsetrules] = useState([])
    const [rules, setrules] = useState([]);

    const handleChange = event => {
      setsetrules(event.target.value);
    };

    const handleChangeMultiple = event => {
      const { options } = event.target;
      const value = [];
      for (let i = 0, l = options.length; i < l; i += 1) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      setsetrules(value);
    };

  return (
    <div>
      <FormControl >
        <InputLabel >Tag</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={ruleSetName}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(", ")}
          
        >
          {names.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={ruleSetName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown