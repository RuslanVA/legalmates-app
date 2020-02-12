import React, {Component} from "react";
import "./Steps.scss";
import StepsItem from "../StepsItem/StepsItem";

class Steps extends Component {

    handleClick = (e) => {
        if (!e.currentTarget.classList.contains('active')) {
            for (let item of e.currentTarget.parentNode.querySelectorAll('.steps-item')) {
                item.classList.remove('active');
            }
            e.currentTarget.classList.add('active');
        }
    };

    render() {
        return (
            <ul className="steps">

                    {this.props.data.map((item) => {
                        const itemClassName = (item.id === 1) ? 'active' : null;
                        return (
                            <StepsItem
                                itemClassName={itemClassName}
                                key={item.id}
                                step={item.step}
                                title={item.title}
                                desc={item.desc}
                                onclick={this.handleClick}
                            />
                        )
                    })
                    }
            </ul>
        );
    }
}

export default Steps;
