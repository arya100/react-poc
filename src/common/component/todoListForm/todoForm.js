import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';


const TodoForm = (props) => {
    const [value, setValue] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      props.setNewTodoList([...props.newTodoList, { id: Math.random(), name: value }])
      setValue('');
  };
  
    return (
      <form onSubmit={handleSubmit} style= {{margin:20}}>
      <FormControl fullWidth >

          <Input
              id="standard-adornment-amount"
              required
              placeholder="add new todo"
              value={value}
              onChange={e => setValue(e.target.value)}
              fullWidth
          />
      </FormControl>
  </form>
    );
  }

export default TodoForm;