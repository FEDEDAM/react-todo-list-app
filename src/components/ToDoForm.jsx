import React , { useState , useEffect , useRef } from 'react'

const ToDoForm = (props) => {

    //Attrs
    const [input , setInput] = useState( props.edit ? props.edit.value : '' );

    const inputRef = useRef(null);

    useEffect(() =>{
        inputRef.current.focus()
    });

    //Functions
    const handleChange = e => {
        setInput(e.target.value);
    };

    const hadleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            task: input
        });

        setInput('');
    };


    //Template
    return (
        <form className="todo-form" onSubmit={ hadleSubmit } >
            {
                props.edit ? (
                    <>
                        <input 
                            type="text"
                            placeholder="Update your task" 
                            value={input}
                            name="task"
                            className="todo-input edit"    
                            onChange={ handleChange }
                            ref={ inputRef }
                        />

                        <button className="todo-button edit">Update!</button>
                    </>
                ):(
                    <>
                        <input 
                            type="text"
                            placeholder="Add task to do" 
                            value={input}
                            name="task"
                            className="todo-input"    
                            onChange={ handleChange }
                            ref={ inputRef }
                        />

                        <button className="todo-button">Add task</button>
                    </>
                )
            }
        </form>
    )
}

export default ToDoForm
