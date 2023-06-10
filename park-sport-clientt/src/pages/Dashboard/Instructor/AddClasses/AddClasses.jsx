import React, { useContext, useEffect } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../provider/AuthProvider';
import Swal from 'sweetalert2';

const imag_hosting_token = import.meta.env.VITE_Image_Upload_Token

const AddClasses = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useContext(AuthContext)
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${imag_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                console.log(imageResponse);
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url
                    const { class_name, instructor_name, email, price, available_seat, description } = data;
                    const newClass = { class_name, instructor_name, email, price: parseFloat(price), available_seat: parseInt(available_seat), description, image: imgURL, status: "pending", total_enroll: parseInt(0), feedback: "" }
                    console.log(newClass);
                    fetch("http://localhost:5000/sports", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newClass)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })

    }

    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's new" heading="Add an Class" ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("class_name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} placeholder={user?.displayName}
                        {...register("instructor_name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input type="email" defaultValue={user?.email} placeholder={user?.email}
                        {...register("email", { required: true })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seat*</span>
                    </label>
                    <input type="number" {...register("available_seat", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClasses;