import React from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import serviceImg from '../assets/images/service.png';
import useTitle from '../hooks/useTitle';

const AddService = () => {
    useTitle('Add Services');


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.sname.value;
        const price = form.price.value;
        const ratings = form.rating.value;
        const photo = form.photo.value;
        const desc = form.desc.value;
        const info = {title,price, ratings,photo,desc};

        fetch(`https://assignment-11-server-amber.vercel.app/addservice`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            if(data.result.acknowledged) {
                toast.success('Successfully Service added !!!')
            }
        })
    };
  return (
    <div className='flex justify-center items-center md:h-screen'>
            <div className='grid md:grid-cols-2 md:px-6'>
                <div>
                    <img src={serviceImg} alt="registerPhoto" />
                </div>
                <div className='p-5'>
                    <form onSubmit={handleSubmit} className='space-y-4 border border-gray-300 md:w-2/3 mx-auto p-5 rounded'>
                        <h3 className='text-2xl font-bold text-gray-500'>Add Your Service</h3>
                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>Service Name</label>
                            <input type="text" name='sname' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>Payments</label>
                            <input type="number" name='price' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>Ratings</label>
                            <input type="number" name='rating' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>PhotoUrl</label>
                            <input type="text" name='photo' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>PhotoUrl</label>
                            <textarea rows='4' cols='10' type="text" name='desc' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>


                        <input type='submit' value={'Add Service'} className='bg-[#0ed39e] w-full rounded py-2 font-semibold text-xl text-white hover:bg-[#09e5ab] duration-300' />

                        <Link to={'/register'} className='text-center font-semibold hover:text-[#0ed39e] duration-300 cursor-pointer text-blue-500 block'>Back to home</Link>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default AddService