import { useContext } from 'react';
// Component
import {theme, ThemeContext} from "../_helpers/context/theme";

function About() {
    const [value, setValue] = useContext(ThemeContext);
    return (
        <>
            <div className="about"  style={value}>
                <h2 className="about__h2">Бенайтіс Сергій Станіславович</h2>
                <p>
                    Я, народився 04 вересня 1989 року в місті Красноармійськ Донецької області.
                </p>
                    <br />
                <p>
                    З вересня 1996 року по травень 2006 року навчався в ЗОШ №2 міста Красноармійськ Донецької області.
                </p>
                    <br />
                <p>
                    З 2006 року по 2010 навчався в Академії митної служби України  за спеціальністю
                    "Транспортні технології", кваліфікація - бакалавр з транспортних технологій повна вища.
                    З 2010 по 2011 навчався в Академії митної служби України на за спеціальністю "Транспортні
                    системи", кваліфікація - науковий співробітник в транспортній галузі (магістр).
                    З серпня 2011 року по липень 2020 року працював у Львівській митниці.
                    З липня 2020 року по грудень 2020 року працював у Київській митниці.
                    З грудня 2020 року по вересень 2021 року працював у Львівській митниці.
                    З вересня 2021 року по липень 2022 року працював у Волинській митниці.
                    Обіймав посади інспектора, старшого інспектора, головного інспектора, начальник відділу митного
                    оформлення, заступник начальника митного поста - начальник відділу. Звільнився з посади
                    головного інспектора.
                </p>
                     <br />
                <p>
                    В серпні 2021 року склав іспит із знання української мови та отримав сертифікат, що засвідчує 2-й
                    ступень вільного володіння державною мовою.
                </p>
                    <br />
                <p>
                    Почав вивчати інтернет-технології за напрямком Front-End з березня 2022 року.
                    В кінці березні 2022 закінчив онлайн курс від компанії SoftServe "Baisc - HTML, CSS, JS".
                    З кінця квітня по теперішній час проходжу онлайн курс від компанії IT-hillel "Front-end Pro".
                    <br />

                </p>
                <p>
                    З травня 2022 року по теперішній час проходжуу онлайн курс з вивчення англійської мови в школі
                    "Green Forest". В липні 2022 року отримав сертифікат рівня А1-Elementary.

                </p>
            </div>
        </>
    );
}

export default About;