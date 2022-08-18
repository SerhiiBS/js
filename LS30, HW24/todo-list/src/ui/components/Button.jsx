import React, {useState} from 'react';

function Button(props) {
    const {text, onClick} = props;
    return (
        <button className="form__button" onClick={onClick}>{text}</button>
    )
}

export default Button;