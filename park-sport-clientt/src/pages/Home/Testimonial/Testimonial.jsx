import React from 'react';

const Testimonial = () => {
    return (
        <div className='lg:w-9/12 mx-auto my-8'>
            <div class="mb-8 text-center">
                <h2 class="text-4xl font-bold text-indigo-600">Testimonials</h2>
                <p class="text-lg text-gray-600">What others say about us</p>
            </div>
            <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
                <div class="p-4 text-gray-800 rounded-lg shadow-md shadow-green-500">
                    <div class="mb-2">
                        <p class="mb-2 text-center text-gray-600 ">
                            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                        </p>
                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                                    class="object-cover object-center w-full h-full" />
                            </div>
                            <h5 class="font-bold text-indigo-600">John Doe</h5>
                            <p class="text-sm text-gray-600">CEO / Founder</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 text-gray-800 rounded-lg shadow-md shadow-green-500">
                    <div class="mb-2">
                        <p class="mb-2 text-center text-gray-600 ">
                            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                        </p>
                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img"
                                    class="object-cover object-center w-full h-full" />
                            </div>
                            <h5 class="font-bold text-indigo-600">michael james</h5>
                            <p class="text-sm text-gray-600">web developer</p>
                        </div>
                    </div>
                </div>
                <div class="p-4 text-gray-800 rounded-lg shadow-md shadow-green-500">
                    <div class="mb-2">
                        <p class="mb-2 text-center text-gray-600 ">
                            " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                        </p>
                        <div class="flex flex-col items-center justify-center">
                            <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                                <img src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg" alt="img"
                                    class="object-cover object-center w-full h-full" />
                            </div>
                            <h5 class="font-bold text-indigo-600">michael james</h5>
                            <p class="text-sm text-gray-600">web developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;