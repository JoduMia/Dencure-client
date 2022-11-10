import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import updatePhoto from '../assets/images/update.png'
import useTitle from '../hooks/useTitle';

const UpadateReview = () => {
    const [review, setReview] = useState({});
    useTitle('Update Review')
    const { id } = useParams();


    // get all the data form mongodb------>
    useEffect(() => {
        fetch(`https://assignment-11-server-amber.vercel.app/getreview/${id}`)
            .then(res => res.json())
            .then(data => {
                setReview(data);
            })
            .catch(err => console.log(err.message))
    }, [id])


    //pathcing data to update the review in mongodb.
    const updateReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const message = form.message.value;
        const author = form.name.value;
        const review = form.rating.value;
        const heading = form.brief.value;
        const avatar = form.avatar.value;
        form.reset();

        const sendingData = {author, review, message, heading, avatar};

        fetch(`https://assignment-11-server-amber.vercel.app/updatereview/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendingData)
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount === 1) {
                    toast.success('Successfully updated your review !!!')
                }
            })
    };

    return (<div className='flex justify-center items-center md:h-auto bg-gray-100'>
        <div className='grid md:grid-cols-2 md:px-6'>
            <div className='flex justify-center items-center'>
                <img src={updatePhoto} alt="registerPhoto" />
            </div>
            <div className='p-5 flex justify-center items-center'>
                <form onSubmit={updateReview} className='space-y-4 border border-gray-300 md:w-2/3 mx-auto p-5 rounded'>
                    <h3 className='text-2xl font-bold text-gray-500'>Update Review</h3>
                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Author Name</label>
                        <input type="text" name='name' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required defaultValue={review?.author} />
                    </div>


                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Short Review</label>
                        <textarea type="text" name='brief' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required defaultValue={review?.heading} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Author image Link</label>
                        <textarea type="text" rows={3} name='avatar' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required defaultValue={review?.avatar} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Say something briefly</label>
                        <textarea type="text" rows={5} cols={10} name='message' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required defaultValue={review?.message} />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Ratings</label>
                        <input type="number" max={'5'} min="0" step='any' name='rating' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required defaultValue={review?.review} />
                    </div>

                    <input type='submit' value={'Update Review'} className='bg-[#0ed39e] w-full rounded py-2 font-semibold text-xl text-white hover:bg-[#09e5ab] duration-300' />
                </form>
            </div>
        </div>
    </div>
    )
}

export default UpadateReview