import React, {Fragment} from "react";
import CardLogo from "./Card-logo";
import Phone from "./phone-logo.png"
import Mail from './mail-logo.png';
import PointLocation from "./location.png";

const numberPhone = "+38(097)572-50-70";
const mail = "Original.dn.ua@gmail.com";
const pointLocation = "Lviv";


class BussinesCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Fragment>
            <div className="wrapper-card">

                <div><CardLogo></CardLogo>
                    <p className="name-company">React company</p>
                </div>
                <div className="main-block">
                    <div className="profession">
                        <h1>BENAITIS SERHII</h1>
                        <h2>FRONT-END DEVELOPER</h2>
                    </div>
                    <div className="description">
                        <div className="skills">
                            <ul> Skills:
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                                <li>JQuery</li>
                                <li>Ajax</li>
                                <li>React</li>
                            </ul>
                        </div>
                        <div className="contacts">
                            <div className="contact"><img className="logo" src={Phone}/> <p>{numberPhone}</p></div>
                            <div className="contact"><img className="logo" src={Mail}/> <p>{mail}</p></div>
                            <div className="contact"><img className="logo" src={PointLocation}/> <p>{pointLocation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default BussinesCard