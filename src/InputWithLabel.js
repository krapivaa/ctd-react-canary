import React, { useRef, useEffect } from 'react';
import style from './InputWithLabel.module.css';

function InputWithLabel(props) {
    const inputRef = useRef();

    useEffect(() => {
      inputRef.current.focus();
    },)

    return (
        <>
            <label htmlFor="todoTitle">{props.children}</label>

                <input ref={inputRef} id="todoTitle" name="title" type="text" value={props.todoTitle} onChange={props.handleTitleChange} className={style.input}></input>
        </>
    )
}

export default InputWithLabel
