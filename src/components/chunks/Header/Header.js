import React from "react";
import Logo from "./Logo";
import DropdownMenu from "./DropdownMenu";
import Navigation from "./Navigation";

class Header extends React.Component {

    state = {
        status: false
    };

    handleClick= () => {
        if (!this.state.status) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        this.setState(prevState => ({
            status: !prevState.status,
        }));
    };

    handleOutsideClick = () => {
        this.handleClick();
    };

    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <Logo className="logo" logoWidth="243" logoHeight="56"/>
                </div>

                <div className="header-right">
                    <Navigation className=""/>
                    <div className={this.state.status ? "dropdown active" : "dropdown"}
                        onClick={this.handleClick}>
                        {
                            this.state.status ? <DropdownMenu/> : null
                        }
                    </div>
                </div>

                <div className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    </a>
                    <DropdownMenu/>
                </div>
            </div>
        );
    }
}

export default Header;
