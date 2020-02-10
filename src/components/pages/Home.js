import React, {Component, Fragment} from 'react';


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
                <p>Legal Mates</p>
            </Fragment>
        );
    }
}

export default HomePage;
