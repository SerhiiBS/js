import { useContext, useState } from 'react';
// Component
import Link from './Link';
import {ThemeContext, theme} from "../_helpers/context/theme";
// Core
import { routers } from '../../core/config';

function Header() {
    const [value, setValue] = useContext(ThemeContext);
    const [style, setStyle] = useState(true)

    const changeStyleLight = (e) => {
        setValue(theme.light)
        setStyle(true)

    }
    const changeStyleDark = (e) => {
        setValue(theme.dark)
        setStyle(false)
    }
    return (
        <header className="header" style={value}>
            <h1 className="logo" >Context & React-router </h1>
            <ul className="header__list">
                <li><Link to={routers.main} type="NavLink" color={
                    style ? (theme.light.color) : (theme.dark.color)
                }>Главная</Link></li>
                <li><Link to={routers.todo} type="NavLink" color={
                    style ? (theme.light.color) : (theme.dark.color)
                }>TODO лист</Link></li>
                <li><Link to={routers.about} type="NavLink" color={
                    style ? (theme.light.color) : (theme.dark.color)
                }>Биография</Link></li>
                <li><Link to={routers.contact} type="NavLink" color={
                    style ? (theme.light.color) : (theme.dark.color)
                }>Контакты</Link></li>
            </ul>
            <label className="header__style">{ style ? (<button style={value} onClick={changeStyleDark}>Dark style</button>)
                : (<button style={value}onClick={changeStyleLight}>Light style</button>)}</label>
        </header>
    );
}

export default Header;
