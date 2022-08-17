import React, { useState, useEffect, Component} from 'react';
// Parts
import Form from "../components/Form";
import Item from "../components/Item";

function Wrapper(props) {

    const [items, setItems] = useState({
        items: JSON.parse(localStorage.getItem('items')) || [],
    });

    function addItem(props, {id, description}) {
        const {items} = props;
        const newItems = [...items, {id, description}];
        setItems( {
            items: newItems
        })
        localStorage.setItem('items', JSON.stringify(newItems))
    }

        return (
            <div className="container">
                <h1>TODO</h1>
                <Form onAdd={addItem()}/>
                <br/>
                <h2>TODOS</h2>
                <br/>
                <hr/>
                <div className="todos-wrapper">
                    {items.map((item) => (
                        <Item
                            // updateItem={this.updateItem.bind(this)}
                            key={item.id}
                            id={item.id}
                            checked={item.checked}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        )

}


export default Wrapper;