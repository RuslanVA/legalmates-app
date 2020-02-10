import React from 'react';
import {Link} from 'react-router-dom';

const Logo = props => (
    <Link to="/" className={props.className}>
        <img alt="Legal Mates"
             src="../../../assets/media/logo.png"
             width={props.logoWidth}
             height={props.logoHeight} />
    </Link>
);

export default Logo;