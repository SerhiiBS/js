import { useContext,useState } from 'react';
// Component
import {theme, ThemeContext} from "../_helpers/context/theme";
import Link from "../components/Link";
//Helpers
import Photo from "../_helpers/images/foto.jpeg"


function Contact() {
    const [value, setValue] = useContext(ThemeContext);
    const [style, setStyle] = useState(true)
    return (
        <>
            <div className="contacts" style={value}>
                <h1>Trainee/Junior JS Developer Benaitis Serhii</h1>
                <div className="contacts__describe">
                    <div >
                        <ul><p>Мої контакти</p>
                            <br />
                            <li >Номер телефона: <Link color={
                                style ? (theme.light.color) : (theme.dark.color)
                            } to="tel:+380975725070">+38(097)572-50-70</Link></li>
                            <li>Email:<Link color={
                                style ? (theme.light.color) : (theme.dark.color)
                            } to="mailto:original.dn.ua@gmail.com">original.dn.ua@gmail.com</Link></li>
                            <li>Git:<Link color={
                                style ? (theme.light.color) : (theme.dark.color)
                            } to="https://github.com/SerhiiBS">https://github.com/SerhiiBS</Link></li>
                        </ul>
                    </div>
                    <img src={Photo}/>
                </div>
            </div>
        </>
    );
}

export default Contact;
