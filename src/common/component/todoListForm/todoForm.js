import React, { useState, useEffect,useRef } from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import { useSelector } from 'react-redux';


const TodoForm = (props) => {
  const { addTodo } = props
  const editTodo = useSelector(state => state.editTodo)
  const { id, name } = editTodo
  const [value, setValue] = useState("");
  const inputRef = useRef("")
  useEffect(() => {
    setValue(name ? name : '')
  }, [editTodo])

  useEffect(() => {
    inputRef.current.focus()
    console.log(inputRef.current)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: id ? id : null, name: value })
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: 20 }}>
      <FormControl fullWidth >

        <Input
          ref = {inputRef}
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