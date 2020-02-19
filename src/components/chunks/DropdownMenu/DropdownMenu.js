import React from 'react';
import {Link} from 'react-router-dom';
import "./DropdownMenu.scss";

const DropdownMenu = (props) => (
    <div className={"dropdown-menu" + (props.className ? ' ' + props.className : '')}>
        <ul>
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
    </div>
);

export default DropdownMenu;