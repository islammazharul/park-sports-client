import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center lg:w-1/2 mx-auto space-y-4'>
            <h2 className='text-5xl'>{heading}</h2>
            <p className='text-sm'>{subHeading}</p>
        </div>
    );
};

export default SectionTitle;