import React, {Component} from "react";
import Logo from "../Logo/Logo";
import "./Footer.scss";

class Footer extends Component {

    render() {
        return (
            <div className="footer">

                <div className="contact-us">
                    <div className="contact-info">
                        <p className="uppercase">
                            Contact Us
                        </p>
                        <h2 className="title">
                            Let's talk
                        </h2>
                        <p className="text">
                            Fill this out so we can learn more about you and your needs.
                        </p>
                    </div>
                    <div className="contact-form">

                    </div>
                </div>

                <div className="copyright">
                    <Logo logoWidth="150" logoHeight="34"/>
                    <p>
                        2019 legalmates. All rights reserved.
                    </p>
                </div>

            </div>
        );
    }
}

export default Footer;
