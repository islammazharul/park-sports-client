import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageCard = ({ sport, handleApprove, handleDeny }) => {
    const { _id, image, class_name, email, price, status, total_enroll, available_seat, feedback, instructor_name } = sport;

    const [axiosSecure] = useAxiosSecure();
    const { data: sports = [], refetch, loading } = useQuery({
        queryKey: ["sports"],
        queryFn: async () => {
            const res = await axiosSecure.get("/sports")
            return res.data
        }
    })

    const handleFeedback = (event) => {
        event.preventDefault()
        const message = event.target.message.value;
        const feedback = { message }
        event.target.reset()
        axiosSecure.patch(`/sports/feedback/${_id}`, feedback)
            .then(data => {
                if (data.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Feedback posted successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

        console.log(message);
    }

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
                    feedback :  {feedback}
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

                    {/* modal for feedback */}
                    <label htmlFor={`my-modal${_id}`} className="btn btn-sm bg-yellow-500">Feedback</label>
                    < input type="checkbox" id={`my-modal${_id}`} className="modal-toggle" />
                    <dialog id={`my_modal_1${_id}`} className="modal">
                        <form onSubmit={handleFeedback} method="dialog" className="modal-box bg-green-400 rounded-sm">
                            <h3 className="font-bold text-lg">Feedback</h3>
                            <div className="w-full">
                                <textarea type="text" name="message" placeholder="Write Your Feedback" className="textarea textarea-bordered w-full" ></textarea>
                            </div>
                            <div className="modal-action flex justify-end items-end">
                                <button className="btn btn-sm btn-warning" type='submit'>submit</button>
                                <label htmlFor={`my-modal${_id}`} className="btn btn-sm btn-primary">Back</label>
                            </div>
                        </form>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default ManageCard;