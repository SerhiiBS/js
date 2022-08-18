import React, {useState} from 'react';
// Parts
import Form from "../components/Form";
import Item from "../components/Item";

function Wrapper() {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
    const [edit, setEdit] = useState(false);

    const addItem = ({id, description}) => {

        const newItems = [...items, {id, description}];
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems))
    }

    const updateItem = ({id, checked, lineThrough}) => {
        const updateItems = items.map(item => {
            if (item.id === id) {
                item.checked = checked
            }
            return item;
        });
        setItems(updateItems)
        localStorage.setItem('items', JSON.stringify(updateItems))
    }

    const removeItem = ({id}) => {
        const deleteItem = items.filter(item => {
            if (item.id !== id) {
                return item
            }
        })
        setItems(deleteItem)
        localStorage.setItem('items', JSON.stringify(deleteItem))
    }

    const editItem = ({id, description}) => {
        const editItem = items.filter(item => {
            if (item.id === id) {
                return item
            }
        })
        if (edit === false) {
            setEdit(true)
        }
    }


    return (
        <div className="container">
            <h1>TODO</h1>
            <Form onAdd={addItem}/>
            <br/>
            <h2>TODOS</h2>
            <br/>
            <hr/>
            <div className="todos-wrapper">
                {items.map((item) => (
                    <Item
                        updateItem={updateItem}
                        key={item.id}
                        id={item.id}
                        removeItem={removeItem}
                        checked={item.checked}
                        edit={item.edit}
                        description={item.description}
                        editItem={editItem}
                    />
                ))}
            </div>
        </div>
    )

}


export default Wrapper;