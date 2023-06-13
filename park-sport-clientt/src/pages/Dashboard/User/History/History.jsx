
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useEnrollClass from '../../../../hooks/useEnrollClass';


const History = () => {
    const [enroll] = useEnrollClass()
    return (
        <div className='w-full max-h-full'>
            <Helmet>
                <title>Payment History | Park Sports</title>
            </Helmet>
            <SectionTitle heading="MY PAYMENT HISTORY"></SectionTitle>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-green-500 text-white'>
                            <th>#</th>
                            <th>INSTRUCTOR IMAGE</th>
                            <th>INSTRUCTOR NAME</th>
                            <th>CLASS NAME</th>
                            <th>TRANSACTION ID</th>
                            <th>BOOKING DATE</th>
                            <th>PAY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enroll.map((select, index) => <tr
                                key={select._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={select.instructor_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {select.instructor_name}
                                </td>
                                <td>
                                    {select.classNames}
                                </td>
                                <td>
                                    {select.transactionId}
                                </td>
                                <td>
                                    {select.date}
                                </td>

                                <td className='text-start'>$ {select.price}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default History;