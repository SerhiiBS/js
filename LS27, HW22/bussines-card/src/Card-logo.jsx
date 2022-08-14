import React from "react";
import logo from './react-logo.svg';

class CardLogo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <img src={logo} className="logo-company" alt='React company'/>;
    }
}

export default CardLogo;