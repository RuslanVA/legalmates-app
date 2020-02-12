import React, {Component, Fragment} from 'react';
import Header from "../chunks/Header/Header";
import MainSlide from "../MainSlide/MainSlide";
import HowItWorks from "../HowItWorks/HowItWorks";
import SignUp from "../SignUp/SignUp";
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
                <HowItWorks/>
                <SignUp/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
