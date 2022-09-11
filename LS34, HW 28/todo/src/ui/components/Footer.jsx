import {useSelector} from "react-redux";

import Selectors from "../../engine/core/selectors";


import React from "react";


function Footer() {

    const items = useSelector(Selectors.items);

    return (
        <footer className="container">
            Разом: {items.length}

        </footer>
    )
}

export default Footer;