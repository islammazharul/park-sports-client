import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';

const MyEnrolle = () => {
    return (
        <div>
            <Helmet>
                <title>My Enrolled Classes | Park Sports</title>
            </Helmet>
            <SectionTitle heading="MY ENROLLED CLASSES"></SectionTitle>
        </div>
    );
};

export default MyEnrolle;