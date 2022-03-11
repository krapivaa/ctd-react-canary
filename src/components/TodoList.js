import React from 'react';
import TodoListItem from './TodoListItem';
import style from './TodoList.module.css';
import PropTypes from 'prop-types';


function TodoList(props) {

  const {todoList, onRemoveTodo} = props; //destructuring

    return(
        <div>
            <ul className={style.containerTodoList}>
                {todoList.map(function (item){
                    return (
                    <TodoListItem 
                        key={item.id}
                        title={item.title}
                        item={item}
                        onRemoveTodo={onRemoveTodo}
                        className={style.item}
                        
                        />)
                })}   
            </ul>
        </div>
    );
}

TodoList.propTypes = {
   todoList: PropTypes.array,
   onRemoveTodo: PropTypes.func
};

export default TodoList;



