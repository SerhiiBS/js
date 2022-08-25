import { NavLink } from 'react-router-dom';

function Link(props) {
    const { children, to, color, type } = props
    return (
        type === 'a'
            ? <a href={to} style={{ color }}>{children}</a>
            : <NavLink to={to} style={{ color }}>{children}</NavLink>
    );
}

Link.defaultProps = {
    type: 'a'
}

export default Link;
