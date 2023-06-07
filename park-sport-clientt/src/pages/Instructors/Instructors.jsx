import React from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const Instructors = () => {
    return (
        <div className='mt-10'>
            <Helmet>
                <title>PARK SPORTS ACADEMY | Instructors</title>
            </Helmet>
            <SectionTitle heading="All Sports Instructors" subHeading="We’re fanatical about instilling confidence, strength and focus in young athletes. So, we’ve built one of the most successful youth sports training programs available today.

Our trainers enthusiastically lead our programs according to the needs, ages and developmental stage of each team or individual. We provide a supportive environment where kids have fun learning and improving and our goal is to help them develop:"></SectionTitle>
        </div>
    );
};

export default Instructors;