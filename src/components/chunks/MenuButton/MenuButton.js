import React, {Component} from "react";
import "./MenuButton.scss";

class MenuButton extends Component {
    constructor(props){
        super(props);
        this.state={
            open: this.props.open ? this.props.open : false,
            menuClassName: "menu-button"
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
            this.setState({
                open: nextProps.open,
                menuClassName: nextProps.open ? "menu-button open" : "menu-button"
            });
        }
    }

    handleClick(){
        this.setState({open:!this.state.open});
    }

    render(){
        return(
            <div className={this.state.menuClassName}
                 onClick={this.props.onClick ? this.props.onClick:
                     ()=> {this.handleClick();}}>
                <div className="line line-top"/>
                <div className="line line-middle"/>
                <div className="line line-bottom"/>
            </div>
        )
    }
}

export default MenuButton;