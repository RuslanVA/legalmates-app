import React, {Component} from 'react';
import Header from "../chunks/Header/Header";
import MainSlide from "../MainSlide/MainSlide";
import HowItWorks from "../HowItWorks/HowItWorks";
import SignUp from "../SignUp/SignUp";
import Faq from "../Faq/Faq";
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
            <div className="home-page">
                <Header/>
                <MainSlide/>
                <HowItWorks/>
                <SignUp/>
                <Faq/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;
