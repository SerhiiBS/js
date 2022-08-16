import { Component } from 'react';
// Parts
import Form from "../components/Form";
import Item from "../components/Item";

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // items: [{ id: '123' }]
            items: []
        }
    }

    addItem({ id, description }) {
        const { items } = this.state;
        this.setState({
            items: [...items, { id, description }]
        })
    }

    removeItem({id}) {
        const { items } = this.state;
        const removeItem = items.filter(item => {
            if (item.id !== id)
            return item
        })
        this.setState({
            items: removeItem
        })
    }

    render() {
        const { items } = this.state;
        return (
            <div className="container">
                <h1>TODO</h1>
                <Form onAdd={this.addItem.bind(this)} />
                <br/>
                <h2>TODOS</h2>
                <br/>
                <hr/>
                <div className="todos-wrapper">
                    {items.map((item) => (<Item
                        key={item.id}
                        id={item.id}
                        removeItem={this.removeItem.bind(this)}
                        description={item.description}/>))}
                </div>
            </div>
        )
    }
}

export default Wrapper;