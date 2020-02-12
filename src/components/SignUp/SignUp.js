import React, {Component} from "react";
import './SignUp.scss';
import slide from '../../assets/media/ready-banner.jpg';
import Button from "../ui/Button/Button";

class SignUp extends Component {

    render() {
        return (
            <div className="sign-up">
                <img src={slide} alt="Ready to get started?"/>
                <div className="sign-up-info">
                    <h2>
                        Ready to get started?
                    </h2>
                    <p>
                        Simply sign up. You might as well: It’s Free!
                    </p>
                    <Button label="Try Now"/>
                </div>
            </div>
        );
    }
}

export default SignUp;
