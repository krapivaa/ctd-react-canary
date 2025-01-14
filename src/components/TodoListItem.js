//rfc
//props - from parent to child

/** JSDoc
 * 
 * @param {*} props 
 * @returns 
 */

import React from 'react';
import style from './TodoListItem.module.css';
import PropTypes from 'prop-types';

function TodoListItem({title, item, onRemoveTodo}) { //destructuring

    
    return (
        <React.Fragment>
            <li className={style.ListItem}>
                <p>{title}</p>
                <button 
                    type="button"
                    onClick = {() => onRemoveTodo(item.id)}
                    className={style.ButtonRemove}
                 >
                   remove 
                </button>
            </li>
        </React.Fragment>
    )
}

TodoListItem.propTypes = {
    title: PropTypes.string,
    item: PropTypes.object,
    onRemoveTodo: PropTypes.func
 };
 

export default TodoListItem;