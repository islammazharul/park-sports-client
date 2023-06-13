import React, { useContext, useEffect, useState } from 'react';
import './Checkout.css'
import { AuthContext } from '../../../../provider/AuthProvider';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Checkout = ({ data, price }) => {
    console.log(price);
    const { user } = useContext(AuthContext)
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [paymentError, setPaymentError] = useState(' ');
    const [clientSecret, setClientSecret] = useState(" ");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("")

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post("/create-payment-intent", { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setPaymentError(error.message)
            console.log('error', error);
        }
        else {
            // console.log('payment method', paymentMethod);
        }
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'unknown',
                        email: user?.email || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log(paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                instructor_name: data.instructor_name,
                classId: data.classId,
                selectId: data._id,
                status: 'service pending',
                classNames: data.class_name,
                available_seat: data.available_seat
            }
            axiosSecure.post("/payments", payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire(
                            'Success!',
                            'Your payment has been successful',
                            'success'
                        )
                        return res.data.insertResult.insertedId
                    }
                })
        }
        setProcessing(false)
    }

    return (
        <div className='bg-gray-300 w-full lg:w-1/2 mx-auto lg:py-2 text-center mt-20'>
            <h2 className='lg:text-xl font-semibold text-center uppercase mt-10'>class name : <span className='text-green-500'>{data.class_name}</span></h2>
            <h2 className='lg:text-xl font-semibold text-center uppercase'>price : $<span className='text-green-500'>{data.price}</span></h2>
            <form className="mx-auto text-center" onSubmit={handleSubmit}>
                <CardElement

                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-yellow-500 btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>

            {
                paymentError && <p className="text-red-500">{paymentError}</p>
            }
            {
                transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>
            }
        </div>
    );
};

export default Checkout;