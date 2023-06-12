import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useSelectClass from '../../../../hooks/useSelectClass';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Payment_PK)

const Payment = () => {
    const location = useLocation()
    const data = location.state;
    const price = parseFloat(data.price.toFixed(2))

    console.log(data);

    return (
        <div>
            <Helmet>
                <title>Payment | Park Sports</title>
            </Helmet>
            <SectionTitle heading="PROCEED TO PAYMENT"></SectionTitle>
            <Elements stripe={stripePromise}>
                <Checkout data={data} price={price}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;