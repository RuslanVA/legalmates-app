import React, {Component, Fragment} from 'react';
import Header from "../chunks/Header/Header";
import MainSlide from "../MainSlide/MainSlide";
import Footer from "../chunks/Footer/Footer";


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
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
