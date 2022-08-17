// Core
import React, {useState, useEffect} from 'react';
import Button from "./Button";

function Item(props) {
        function handleChecked(props) {
        const { id, updateItem, checked } = props;
        updateItem({ id, checked: !checked })
    }

        const {description, checked} = props;
        return (
            <div className="todo-item">
                <label className="todo-item__label">
                    <input type="checkbox" onClick={handleChecked} defaultChecked={checked} />
                    <p className="todo-item__desc">{description}</p>
                </label>
                <Button text="Удалить" />
            </div>
        )

}

export default Item;