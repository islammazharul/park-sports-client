import React from 'react';

const ManageCard = ({ sport, handleApprove, handleDeny, disable }) => {
    const { _id, image, class_name, email, price, status, total_enroll, available_seat, feedback, instructor_name } = sport;
    return (
        <div className=" mx-auto rounded-lg shadow-md lg:flex md:flex shadow-sky-600">
            <img
                className="object-cover w-full md:w-1/2 lg:w-1/2"

                src={image}
                alt="image"
            />
            <div className="px-6 py-4">
                <h4 className="mb-3  text-base font-bold tracking-tight text-sky-600">
                    Class Name :  {class_name}
                </h4>
                <h4 className="mb-3  text-base font-bold tracking-tight text-sky-600">
                    Instructor Name :  {instructor_name}
                </h4>
                <h4 className="mb-3  text-base font-bold tracking-tight text-sky-600">
                    Email :  {email}
                </h4>
                <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                    Status :  {status}
                </h4>
                <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                    Available Seats :  {available_seat}
                </h4>
                <h4 className="mb-3 text-base font-semibold tracking-tight text-sky-600">
                    Price : $ {price}
                </h4>
                <div className='flex justify-between items-center'>
                    {
                        status === 'approved' || status === 'deny' ? <button disabled onClick={() => handleApprove(_id)} className="btn btn-sm bg-green-500">Approve</button> : <button onClick={() => handleApprove(_id)} className="btn btn-sm bg-green-500">Approve</button>
                    }
                    {
                        status === 'approved' || status === 'deny' ? <button disabled onClick={() => handleDeny(_id)} className="btn btn-sm bg-red-500">Deny</button> : <button onClick={() => handleDeny(_id)} className="btn btn-sm bg-red-500">Deny</button>
                    }

                    <button className="btn btn-sm bg-yellow-500">Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default ManageCard;