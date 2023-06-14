import React from 'react';

const Testimonial = () => {
    return (
        <div className='lg:w-9/12 mx-auto my-8'>
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-indigo-600">Testimonials</h2>
                <p className="text-lg text-gray-600">What others say about us</p>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-x-2">
                <div className="p-4 text-gray-800 rounded-lg shadow-md shadow-green-500">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            I can help you with a general CEO bio template that you can modify for a specific CEO. Here's a sample CEO bio
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                                    className="object-cover object-center w-full h-full" />
                            </div>
                            <h5 className="font-bold text-indigo-600">John Doe</h5>
                            <p className="text-sm text-gray-600">Founder</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-gray-800 rounded-lg shadow-md shadow-green-500">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            Throughout his soccer career, Ben Crawley has excelled at all levels. Ben grew up in Austin and graduated from Westlake High School in 1989..
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img"
                                    className="object-cover object-center w-full h-full" />
                            </div>
                            <h5 className="font-bold text-indigo-600">Ben Crawley</h5>
                            <p className="text-sm text-gray-600">Chief Executive</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 text-gray-800 rounded-lg shadow-md shadow-green-500">
                    <div className="mb-2">
                        <p className="mb-2 text-center text-gray-600 ">
                            Throughout his soccer career, michael anderson has excelled at all levels. Ben grew up in Austin and graduated from Westlake High School in 1989.
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <img src="https://i.ibb.co/x8JBSR4/team-1.jpg" alt="img"
                                    className="object-cover object-center w-full h-full" />
                            </div>
                            <h5 className="font-bold text-indigo-600">michael anderson</h5>
                            <p className="text-sm text-gray-600">Manger</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;