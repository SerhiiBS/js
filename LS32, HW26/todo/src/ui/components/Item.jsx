// Core
import React, {useState} from 'react';
import  {Form,Field} from "react-final-form";
import Button from "./Button";
import Input from "./Form/Input";

function Item(props) {
    const {description, checked, id, updateItem, removeItem, editItem,} = props;
    const [input, setInput] = useState(false);
    const [editingText, setEditingText] = useState("");

    const handleChecked = () => {
        updateItem({id, checked: !checked})
    }

    const handleRemove = () => {
        removeItem({id})
    }

    const inputValue = (event) => {
        setEditingText(event.target.value)
    }

    const handleEdit = () => {
        setInput(true)
    }

    const handleSave = () => {
        editItem(id, editingText);
        setInput(false)
    }

    return (
        <div className="todo-item">
            <label className="todo-item__label">
                <input type="checkbox" onClick={handleChecked} defaultChecked={checked}/>
                {input ?
                    (<Field name="description" component={Input} />)
                    // (<input type="text" name="description" className="todo-edit" onChange={inputValue}/>)
                    : (<p className="todo-item__desc">{description}</p>)}
            </label>
            {input ?
                (<Button text="Сохранить" className="todo-input" onClick={handleSave}/>)
                : (<Button text="Редактировать" onClick={handleEdit}/>)}
            <Button text="Удалить" onClick={handleRemove}/>
        </div>
    )

}

export default Item;