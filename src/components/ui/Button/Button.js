import React from 'react';
import "./Button.scss";

const Button = (props) => {

    const buttonClassName = props.buttonClassName ? ('btn ' + props.buttonClassName) : "btn";

    return (
        <a
            className={buttonClassName}
            href={props.href ? props.href : ""}
            onClick={props.onclick ? props.onclick : null}
        ><span>{props.label}</span>
        </a>
    );
};

export default Button;