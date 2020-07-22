
import {ADD_TODO} from '../action/types';

const initialState = {
    TodoList : [
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
    ],
    editTodo:{}
}




export const rootReducer = (state = initialState, action) => {
    console.log(action.type,action.payload)
    switch(action.type){
        case "ADD_TODO":
            return {...state,TodoList:[...state.TodoList,action.payload],editTodo:{}}
        case "DELETE_TODO":
            return {...state, TodoList:state.TodoList.filter(todo => todo.id !== action.payload)}
        case "ADD_TO_EDIT_TODO":
                return{...state, editTodo:action.payload}
        
        case "UPDATE_TODO":
            console.log('checking update')
            return{...state,
                TodoList:state.TodoList.map(todo => todo.id === action.payload.id?action.payload:todo)
                ,editTodo:{}}
              
        default:
            return state
        
    };
}
