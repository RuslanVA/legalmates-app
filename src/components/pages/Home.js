import React, {Component, Fragment} from 'react';
import Header from "../chunks/Header/Header";


class HomePage extends Component {

    constructor(){
        super();
        this.state = {
            error: false
        };
    }

    render(){
        return (
            <Fragment>
                <Header/>
                <p>Legal Mates</p>
            </Fragment>
        );
    }
}

export default HomePage;
