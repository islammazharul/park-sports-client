import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useSelectClass from '../../../../hooks/useSelectClass';

const Payment = ({ paymentInfo }) => {
    // const [select] = useSelectClass()
    // const total = select.reduce((sum, item) => item.price + sum, 0)
    // console.log(paymentInfo);

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