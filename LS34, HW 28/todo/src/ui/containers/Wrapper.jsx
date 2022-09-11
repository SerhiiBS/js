import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
//Core
import {setItem} from "../../engine/core/slice";
import Selectors from "../../engine/core/selectors";
// Parts
import Form from "../components/Form";
import Item from "../components/Item";



function Wrapper() {

    const dispatch = useDispatch();
    const items = useSelector(Selectors.items);
    const loading = useSelector(Selectors.loading);


    useEffect(() => {
        const defState = JSON.parse(localStorage.getItem('items')) || [];
        dispatch(setItem(defState))
    }, [dispatch])

    const addItem = ({ id, description }) => {
        const newItems =  [...items, { id, description }];
        dispatch(setItem(newItems));

        localStorage.setItem('items', JSON.stringify(newItems))
    }

    const updateItem = ({id, checked}) => {
        // const updateItems = items.map(item => {
        //     if (item.id === id) {
        //         item.checked = checked
        //     }
        //     return item;
        // });
        // setItems(updateItems)
        // localStorage.setItem('items', JSON.stringify(updateItems))
    }

    const removeItem = ({id}) => {
        // const deleteItem = items.filter(item => {
        //     if (item.id !== id) {
        //         return item
        //     }
        // })
        // setItems(deleteItem)
        // localStorage.setItem('items', JSON.stringify(deleteItem))
    }

    const editItem = (id, newDescription) => {
        // const updateDescription = items.map(item => {
        //     if (item.id === id) {
        //         item.description = newDescription;
        //         return item
        //     }
        //     return item
        // })
        // setItems(updateDescription)
        // localStorage.setItem('items', JSON.stringify(updateDescription))
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