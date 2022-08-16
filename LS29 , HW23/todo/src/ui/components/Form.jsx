// Core
import { Component } from 'react';
import { v4 } from 'uuid';
// Parts
import Button from "./Button";

class Form extends Component {
    handleAdd(event) {
        event.preventDefault();
        const { onAdd } = this.props;
        onAdd({ id: v4(), description: event.target.description.value })
        event.target.description.value = '';

    }
    render() {
        return (
            <form className="form" onSubmit={this.handleAdd.bind(this)}>
                <input type="text" name="description" className="form__input"/>
                <Button text="Добавить" />
            </form>
        )
    }
}

export default Form;