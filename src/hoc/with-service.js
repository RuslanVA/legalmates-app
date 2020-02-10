import React from 'react';
import { ServiceConsumer } from '/components/Service-context/Service-context';

const withService = () => (Wrapped) => {

    return (props) => {
        return (
            <ServiceConsumer>
                {
                    (productsService) => {
                        return (<Wrapped {...props}
                                         productsService={productsService}/>);
                    }
                }
            </ServiceConsumer>
        );
    }
};

export default withService;
