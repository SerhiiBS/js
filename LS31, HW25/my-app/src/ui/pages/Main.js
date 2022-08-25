import { useContext } from 'react';
// Component
import {theme, ThemeContext} from "../_helpers/context/theme";

function Main() {
    const [value, setValue] = useContext(ThemeContext);

    return (
       <>
       <div  className="main" style={value}>
            <h1 className="main__h1">Benaitis Serhii - Junior JS Developer</h1>
            <div className="main__skills">
                <div className="main__blocks">
                    <ul><p>Technical skills:</p>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JS</li>
                        <li>Responsive/Mobile Design</li>
                        <li>Git</li>
                        <li>Bootstrap</li>
                        <li>Jquery</li>
                        <li>AJAX</li>
                        <li>Gulp</li>
                        <li>Webpack</li>
                        <li>ES6-11</li>
                        <li>React</li>
                        <li>Google docs and Microsoft Office programs:
                            <br />
                            Excel, Docs /Word and Power Point;</li>
                    </ul>
                </div>
                <div className="main__blocks">
                    <ul><p>Soft skills:</p>
                        <li>Creativity</li>
                        <li>Communication Skills</li>
                        <li>Teamwork</li>
                        <li>Growth Mindset</li>
                        <li>Problem-solving</li>
                    </ul>
                </div>
                <div className="main__blocks">
                    <ul><p>Personal qualities:</p>
                        <li>Responsible</li>
                        <li>Stress-resistant</li>
                        <li>Sociable</li>
                        <li>Decent and kind</li>
                    </ul>
                </div>
            </div>
       </div>
        </ >
    );
}

export default Main;
