import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center lg:w-1/2 mx-auto space-y-4'>
            <h2 className='text-4xl text-indigo-600 font-bold'>{heading}</h2>
            <p className='text-sm text-gray-600'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;