import React from 'react';
import {Link} from 'react-router-dom';

const DropdownMenu = (props) => (
    <ul className={"dropdown-menu" + (props.className ? ' ' + props.className : '')}>
        <li>
            <Link to={{pathname: '/how-it-works/'}}>
                <span>How it works</span>
            </Link>
        </li>
        <li>
            <Link to={{pathname: '/contact-us'}}>
                <span>Contact us</span>
            </Link>
        </li>
    </ul>
);

export default DropdownMenu;