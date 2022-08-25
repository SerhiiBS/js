import { useContext, useState } from 'react';

// Component
import Link from './Link';
import {theme, ThemeContext} from "../_helpers/context/theme";


function Footer() {
    const [value, setValue] = useContext(ThemeContext);
    const [style, setStyle] = useState(true)
    return (
        <footer className="footer" style={value}>
            <h1 className="logo">Benaitis Serhii</h1>
            <ul>
                <li>Номер телефона: <Link to="tel:+380975725070" color={
                    style ? (theme.light.color) : (theme.dark.color)
                }>  +38(097)572-50-70</Link></li>
                <li>Email:<Link to="mailto:original.dn.ua@gmail.com" color={
                    style ? (theme.light.color) : (theme.dark.color)
                }>  original.dn.ua@gmail.com</Link></li>
                <li>Git: <Link to="https://github.com/SerhiiBS" color={
                    style ? (theme.light.color) : (theme.dark.color)
                }>  https://github.com/SerhiiBS</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;
