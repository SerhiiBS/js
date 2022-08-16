import { Component } from 'react';

class Button extends Component {
    render() {
        const { text, onClick} = this.props;
        return (
            <button className="form__button" onClick={onClick}>{ text }</button>
        )
    }
}

export default Button;