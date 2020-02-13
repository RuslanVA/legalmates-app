import React from 'react';
import "./FaqItem.scss";

const FaqItem = (props) => {

    const itemClassName = props.itemClassName ? ('faq-item ' + props.itemClassName) : "faq-item";

    return (
        <li
            className={itemClassName}
        >
            <h3>
                {props.title}
            </h3>
            <p>
                {props.desc}
            </p>
            <div className="toggle"
                 onClick={props.onclick ? props.onclick : null}>

            </div>
        </li>
    );
};

export default FaqItem;