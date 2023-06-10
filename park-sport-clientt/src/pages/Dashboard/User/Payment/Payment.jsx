import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const Payment = () => {
    return (
        <div>
            <Helmet>
                <title>Payment | Park Sports</title>
            </Helmet>
            <SectionTitle heading="PROCEED TO PAYMENT"></SectionTitle>
        </div>
    );
};

export default Payment;