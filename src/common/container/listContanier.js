import React, {useState}from "react";
import ToDoList from '../component/list/list'
import TodoForm from '../component/todoListForm/todoForm'
import { useSelector, useDispatch } from "react-redux";


const ListContaniner = () => {
    const dispatch = useDispatch()
    const newTodoList = useSelector(state => state.TodoList)
    console.log('cekcing todod list ',newTodoList)
    // const [newTodoList, setNewTodoList] = useState(TodoList);
    

    const removeTodo = (id) => {
        dispatch({
            type:"DELETE_TODO",
            payload:id
        })
        

    }
    const handleSubmit = (newTodo) => {
       // setNewTodoList([...newTodoList, { id: Math.random(), name: value }])
       if(newTodo.id){
           //updating code
           console.log("updating ")
           dispatch({
               type:"UPDATE_TODO",
               payload:newTodo
           })
       }else{
        dispatch({
            type:"ADD_TODO",
            payload:{id:Math.random(),name:newTodo.name}
        })
       }
        

    };
    const editTodo =(todo) => {
        console.log(todo)
        //const editTodo = newTodoList.find(todo => todo.id === id)
        //setValue(editTodo)
        dispatch({
            type:"ADD_TO_EDIT_TODO",
            payload:todo
        })

    }
    
    return (
        <div>
            <h1>Todos</h1>
           <ToDoList todos={newTodoList} removeTodo={removeTodo} editTodo={editTodo}/>
           <TodoForm addTodo={handleSubmit} />
        </div>
    )
}

export default ListContaniner;