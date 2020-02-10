import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../assets/media/logo.png';

const Logo = props => (
    <Link to="/" className={props.className}>
        <img alt="Legal Mates"
             src={logo}
             width={props.logoWidth}
             height={props.logoHeight} />
    </Link>
);

export default Logo;