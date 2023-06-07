import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Testimonial from '../Testimonial/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PARK SPORTS ACADEMY | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;