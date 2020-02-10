import React, {Component, Fragment} from 'react';
import Header from "../chunks/Header/Header";
import MainSlide from "../MainSlide/MainSlide";


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
                <MainSlide/>
                <p>Legal Mates</p>
            </Fragment>
        );
    }
}

export default HomePage;
