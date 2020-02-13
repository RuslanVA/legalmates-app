import React from 'react';
import "./StepsItem.scss";

const StepsItem = (props) => {

    const itemClassName = props.itemClassName ? ('steps-item ' + props.itemClassName) : "steps-item";

    return (
        <li
            className={itemClassName}
            onClick={props.onclick ? props.onclick : null}
        >
            <h4>
                {props.step}
            </h4>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.desc}
            </p>
        </li>
    );
};

export default StepsItem;