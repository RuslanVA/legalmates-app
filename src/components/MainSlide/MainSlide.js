import React, {Component} from "react";
import './MainSlide.scss';
import slide from '../../assets/media/home-main.jpg';
import Button from "../ui/Button/Button";

class MainSlide extends Component {

    render() {
        return (
            <div className="main-slide">
                <img src={slide} alt="Legal Mates"/>
                <div className="main-slide-info">
                    <h1>
                        Simplifying Case Referral
                    </h1>
                    <p>
                        Whenever you refer a case, you are limited by who you know, the time you have, and where you are. Now, with Legal Mates, you don’t have to be.
                    </p>
                    <Button label="Send it"/>
                </div>
            </div>
        );
    }
}

export default MainSlide;
