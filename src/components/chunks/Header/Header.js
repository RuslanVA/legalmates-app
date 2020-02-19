import React, {Component} from "react";
import Logo from "../Logo/Logo";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Navigation from "../Navigation/Navigation";
import MenuButton from "../MenuButton/MenuButton";
import './Header.scss';

class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            menuOpen:false
        }
    }

    handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
    }

    handleLinkClick() {
        this.setState({menuOpen: false});
    }

    render() {
        return (
            <div className="header">
                <div className="header-left">
                    <Logo logoWidth="219" logoHeight="50"/>
                </div>

                <div className="header-right">
                    <Navigation/>
                    <div className={this.state.menuOpen ? "dropdown active" : "dropdown hidden"}>
                        <DropdownMenu/>
                    </div>
                    <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()}/>
                </div>
            </div>
        );
    }
}

export default Header;
