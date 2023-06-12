import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: popular = [], refetch } = useQuery({
        queryKey: ["popularClass"],
        queryFn: async () => {
            const res = await axiosSecure.get("/popularClass")
            return res.data
        }
    })
    return (
        <div className='mt-10'>
            <SectionTitle heading="Most Popular Classes" subHeading="We thrive on building a player’s technical foundation and applying those skills into an appropriate competitive environment.  Most of our players have made a long-term commitment to become the best player they can, knowing that it involves hard work and dedication to reach their full potential."></SectionTitle>
            <h2>{popular.length}</h2>
            <div className='lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-9/12 mx-auto my-8'>
                {
                    popular.length > 0 && popular.map(pop =>
                        <div key={pop._id} className="max-w-sm shadow-md shadow-green-500">
                            <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                                {pop.class_name}
                            </h4>
                            <img
                                className="object-cover w-full h-48"
                                src={pop.class_imag}
                                alt="image"
                            />
                            <div className="px-6 py-4">

                                <p className="mb-2 leading-normal text-sky-900">
                                    Enroll: {pop.total_enroll}
                                </p>
                                <button
                                    className="px-4 py-2 text-sm shadow bg-green-100 shadow-green-500 text-green-500 
                                     hover:bg-green-500 hover:text-green-100">
                                    Read more
                                </button>
                            </div>
                        </div>
                    )
                }

                {/* <div className="max-w-sm shadow-md shadow-green-500">
                    <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                        Christmas Tree Decoration
                    </h4>
                    <img
                        className="object-cover w-full h-48"
                        src="https://i.ibb.co/KbWp7YM/class-1.jpg"
                        alt="image"
                    />
                    <div className="px-6 py-4">

                        <p className="mb-2 leading-normal text-sky-900">
                            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
                            quibusdam facere quo laborum maiores sequi nam tenetur laud.
                        </p>
                        <button
                            className="px-4 py-2 text-sm shadow bg-green-100 shadow-green-500 text-green-500 
      hover:bg-green-500 hover:text-green-100">
                            Enroll Now
                        </button>
                    </div>
                </div>
                <div className="max-w-sm shadow-md shadow-green-500">
                    <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                        Christmas Tree Decoration
                    </h4>
                    <img
                        className="object-cover w-full h-48"
                        src="https://i.ibb.co/KbWp7YM/class-1.jpg"
                        alt="image"
                    />
                    <div className="px-6 py-4">

                        <p className="mb-2 leading-normal text-sky-900">
                            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
                            quibusdam facere quo laborum maiores sequi nam tenetur laud.
                        </p>
                        <button
                            className="px-4 py-2 text-sm shadow bg-green-100 shadow-green-500 text-green-500 
      hover:bg-green-500 hover:text-green-100">
                            Read more
                        </button>
                    </div>
                </div>
                <div className="max-w-sm shadow-md shadow-green-500">
                    <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                        Christmas Tree Decoration
                    </h4>
                    <img
                        className="object-cover w-full h-48"
                        src="https://i.ibb.co/KbWp7YM/class-1.jpg"
                        alt="image"
                    />
                    <div className="px-6 py-4">

                        <p className="mb-2 leading-normal text-sky-900">
                            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
                            quibusdam facere quo laborum maiores sequi nam tenetur laud.
                        </p>
                        <button
                            className="px-4 py-2 text-sm shadow bg-green-100 shadow-green-500 text-green-500 
      hover:bg-green-500 hover:text-green-100">
                            Read more
                        </button>
                    </div>
                </div>
                <div className="max-w-sm shadow-md shadow-green-500">
                    <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                        Christmas Tree Decoration
                    </h4>
                    <img
                        className="object-cover w-full h-48"
                        src="https://i.ibb.co/KbWp7YM/class-1.jpg"
                        alt="image"
                    />
                    <div className="px-6 py-4">

                        <p className="mb-2 leading-normal text-sky-900">
                            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
                            quibusdam facere quo laborum maiores sequi nam tenetur laud.
                        </p>
                        <button
                            className="px-4 py-2 text-sm shadow bg-green-100 shadow-green-500 text-green-500 
      hover:bg-green-500 hover:text-green-100">
                            Read more
                        </button>
                    </div>
                </div>
                <div className="max-w-sm shadow-md shadow-green-500">
                    <h4 className="text-center py-3 text-xl font-semibold tracking-tight text-white bg-green-500">
                        Christmas Tree Decoration
                    </h4>
                    <img
                        className="object-cover w-full h-48"
                        src="https://i.ibb.co/KbWp7YM/class-1.jpg"
                        alt="image"
                    />
                    <div className="px-6 py-4">

                        <p className="mb-2 leading-normal text-sky-900">
                            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium,
                            quibusdam facere quo laborum maiores sequi nam tenetur laud.
                        </p>
                        <button
                            className="px-4 py-2 text-sm shadow bg-green-100 shadow-green-500 text-green-500 
      hover:bg-green-500 hover:text-green-100">
                            Read more
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default PopularClass;