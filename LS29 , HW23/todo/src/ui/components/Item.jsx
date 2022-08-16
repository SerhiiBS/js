// Core
import {Component} from 'react';
import Button from "./Button";

class Item extends Component {

    remove() {
        const { id, removeItem } = this.props;
        removeItem({id})
    }

    render() {
        const { description } = this.props;
        return (
            <div className="todo-item">
                <label className="todo-item__label">
                    <input type="checkbox" />
                    <p className="todo-item__desc">{description}</p>
                </label>
                <Button text="Удалить" onClick={this.remove.bind(this)}/>
            </div>
        )
    }
}

export default Item;