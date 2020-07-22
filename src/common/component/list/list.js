import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Divider } from '@material-ui/core';

const ToDoList = (props) => {
    const {todos, removeTodo, editTodo} =props
    return (
      <div className="todo-list">
        <List >
                {todos.map(todo => {
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
                                <IconButton edge="end" aria-label="delete">
                                    <EditIcon
                                        onClick={() => { editTodo(todo) }}
                                    />
                                </IconButton>
                            </ListItemSecondaryAction>
                            <Divider/>
                        </ListItem>
                        
                    )
                }
                    
                )}
            </List>
            
      </div>
    );
  }

export default ToDoList;