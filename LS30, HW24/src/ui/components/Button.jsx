import React, {useState, useEffect} from 'react';

function Button (props) {
        const {text} = props;
        return (
            <button className="form__button">{text}</button>
        )
}

export default Button;