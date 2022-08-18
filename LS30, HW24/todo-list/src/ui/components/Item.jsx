// Core
import React, {useState, useEffect} from 'react';
import Button from "./Button";

function Item(props) {
    const {description, checked, id, updateItem, removeItem, items} = props;

    function handleChecked() {
        updateItem({id, checked: !checked})
    }

    function handleRemove() {
        removeItem({id})
    }

    return (
        <div className="todo-item">
            <label className="todo-item__label">
                <input type="checkbox" onClick={handleChecked} defaultChecked={checked}/>
                <p className="todo-item__desc">{description}</p>
            </label>
            <Button text="Редактировать"/>
            <Button text="Удалить" onClick={handleRemove}/>
        </div>
    )

}

export default Item;