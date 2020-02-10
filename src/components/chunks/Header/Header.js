import React from "react";
import Logo from "../Logo/Logo";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Navigation from "../Navigation/Navigation";
import './Header.scss';

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
                    <Logo className="logo" logoWidth="219" logoHeight="50"/>
                </div>

                <div className="header-right">
                    <Navigation className=""/>
                    <div className={this.state.status ? "dropdown active" : "dropdown"}
                        onClick={this.handleClick}>
                        {
                            this.state.status ? <DropdownMenu/> : null
                        }
                    </div>
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
