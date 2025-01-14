import React from 'react';
import InputWithLabel from './InputWithLabel';
import style from './AddTodoForm.module.css';
import PropTypes from 'prop-types';


function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = React.useState("");

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddToDo = (event) => {
        event.preventDefault();
        // const todoTitle = event.target.todoTitle.value;
        // console.log(todoTitle);
        // console.log(event);
        onAddTodo({title: todoTitle, id: Date.now()});
        // todoTitle.reset(); resetting the form
        // event.target.todoTitle.value = '';
        setTodoTitle('');
    };

    return(
        <div>
            <form onSubmit={handleAddToDo}  className={style.form}>
               <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} label={"Title"}> 
                <p className={style.title}>New to do:</p>
               </InputWithLabel>
                <button className={style.buttonAdd}>
                    add
                </button>
            </form>         
        </div>
    );
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func
};

export default AddTodoForm;