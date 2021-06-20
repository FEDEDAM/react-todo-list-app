import React ,{ useState } from 'react'
import ToDo from './ToDo';
import ToDoForm from './ToDoForm'

const ToDoList = () => {

    //ATTRS:
    const [ todos , setTodos ] = useState([]);

    //FUNCTIONS:
    const addTodo = todo => {

        if( !todo.task || /^\s*$/.test( todo.task ) ) return;

        const newTodoList = [ todo , ...todos ];

        setTodos( newTodoList );
    };



    const updateTodo = ( todoId , newValue ) => {
        if( !newValue.task || /^\s*$/.test( newValue.task ) ) return;

        setTodos( prev => prev.map( item => ( item.id === todoId ?  newValue : item ) ) );
    }



    const completeTodo = id => {
        let updatedTodoList = todos.map( todo => {
            if( todo.id === id ) todo.isComplete = !todo.isComplete;
            return todo;
        });
        
        setTodos ( updatedTodoList );
    };

    

    const removeTodo = id => {
        const removeArr = [...todos].filter( todo => todo.id !== id );

        setTodos( removeArr );
    };



    //TEMPLATE:
    return (
        <div className="todo-app">
            <h1>What's the Plan for Today?</h1>
            <ToDoForm onSubmit={ addTodo } />
            <ToDo 
                todos = { todos }
                completeTodo = { completeTodo }
                updateTodo = { updateTodo }
                removeTodo = { removeTodo }
            />
        </div>
    )
}

export default ToDoList
