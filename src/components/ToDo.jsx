import React ,{ useState } from 'react';
import ToDoForm from './ToDoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ToDo = ( {todos , completeTodo , updateTodo , removeTodo} ) => {

    //ATTRS:
    const [ edit , setEdit ] = useState({
        id: null,
        value: ''
    });


    //FUNCTIONS
    const submitUpdate = value =>{
        updateTodo( edit.id , value );
        setEdit({ id: null , value: ''});
    };

    if ( edit.id ) return <ToDoForm edit = { edit } onSubmit = { submitUpdate } />;


    //TEMPLATE
    return todos.map( ( todo , index ) => (
        <div 
            key={ index }
            className={ todo.isComplete ? 'todo-row complete' : 'todo-row' }
        >

            <div key={ todo.id } onClick={ () => completeTodo( todo.id ) } >
                { todo.task }
            </div>

            <div className="icons">

                <RiCloseCircleLine 
                    className = "delete-icon"
                    onClick={ () => removeTodo( todo.id ) }
                />

                <TiEdit 
                    className = "edit-icon"
                    onClick={ () => setEdit( { id: todo.id ,value: todo.task } ) }
                />
                
            </div> 

        </div> 
    ));
}

export default ToDo


