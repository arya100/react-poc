import React, { useState } from 'react';
import TodoForm from '../todoListForm/todoForm'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';

const ToDoList = () => {

    const TodoList = [
        {
            id: 1,
            name: "vikku"
        },
        {
            id: 2,
            name: "sri"
        },
        {
            id: 3,
            name: "arya"
        }
    ]
    const [newTodoList, setNewTodoList] = useState(TodoList)

    const removeTodo = (id) => {
        setNewTodoList(newTodoList.filter(todo => todo.id !== id))
    }

    return (
      <div className="todo-list">
        <List >
                {newTodoList.map(todo => {
                    return (
                        <ListItem>
                            <ListItemText
                                primary={todo.name}

                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon
                                        onClick={() => { removeTodo(todo.id) }}
                                    />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        //<Divider />
                    )
                }
                    //<h3>{todo.name} <span onClick={() => { removeTodo(todo.id) }}>X</span> </h3>
                )}
            </List>
            <TodoForm setNewTodoList= {setNewTodoList} newTodoList={newTodoList} />
      </div>
    );
  }

export default ToDoList;