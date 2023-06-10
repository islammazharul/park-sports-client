import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const MySelectedClass = () => {
    return (
        <div>
            <Helmet>
                <title>My Selected Class | Park Sports</title>
            </Helmet>
            <SectionTitle heading="MY SELECTED CLASSES"></SectionTitle>

        </div>
    );
};

export default MySelectedClass;