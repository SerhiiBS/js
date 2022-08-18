// Core
import React, {useState, useEffect} from 'react';
import {v4} from 'uuid';
// Parts
import Button from "./Button";

function Form(props) {
    const {onAdd} = props;

    function handleAdd(event) {
        event.preventDefault();
        onAdd({id: v4(), description: event.target.description.value})
        event.target.description.value = '';
    }

    return (
        <form className="form" onSubmit={handleAdd}>
            <input type="text" name="description" className="form__input"/>
            <Button text="Добавить"/>
        </form>
    )

}


export default Form;