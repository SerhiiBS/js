// Core
import React, {useState} from 'react';
import {v4} from 'uuid';
// Parts
import Button from "./Button";

function Form(props) {
    const {onAdd} = props;

    const handleAdd = (event) => {
        event.preventDefault();
        if (event.target.description.value !== '') {
            onAdd({id: v4(), description: event.target.description.value})
            event.target.description.value = '';
        }
    }

    return (
        <form className="form" onSubmit={handleAdd}>
            <input type="text" name="description" className="form__input"/>
            <Button text="Добавить"/>
        </form>
    )

}


export default Form;