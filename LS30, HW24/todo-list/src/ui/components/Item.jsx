// Core
import React, {useState} from 'react';
import Button from "./Button";

function Item(props) {
    const {description, checked, id, updateItem, removeItem, editItem} = props;

    const handleChecked = () => {
        updateItem({id, checked: !checked})
    }

    const handleRemove = () => {
        removeItem({id})
    }

    const handleEdit = () => {
        editItem({id})
    }


    return (
        <div className="todo-item">
            <label className="todo-item__label">
                <input type="checkbox" onClick={handleChecked} defaultChecked={checked}/>
                <p className="todo-item__desc">{description}</p>
            </label>
            <Button text="Редактировать" onClick={handleEdit}/>
            <Button text="Удалить" onClick={handleRemove}/>
        </div>
    )

}

export default Item;