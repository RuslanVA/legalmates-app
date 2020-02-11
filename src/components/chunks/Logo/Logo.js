import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../../assets/media/logo.png';

const Logo = (props) => {
    const logoClassName = props.logoClassName ? ('logo ' + props.logoClassName) : "logo";
    return (
        <Link to="/" className={logoClassName}>
            <img alt="Legal Mates"
                 src={logo}
                 width={props.logoWidth}
                 height={props.logoHeight}/>
        </Link>
    );
};

export default Logo;