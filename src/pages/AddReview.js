import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import review from '../assets/images/review.png'
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const AddReview = () => {
    useTitle('Add Review')
    const {user} = useContext(AuthContext);
    const {id} = useParams();

const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    const name = form.name.value;
    const rating = form.rating.value;
    const brief = form.brief.value;
    form.reset();

    const sendingData = {id,name,message,rating,brief, email: user?.email, img: user?.photoURL || 'https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png'};

    fetch(`https://assignment-11-server-amber.vercel.app/addreview/${id}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(sendingData)
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        if(data.status === 'successful'){
            toast.success('Successfully Added your review !!!')
        }
    })
};

    return (<div className='flex justify-center items-center md:h-screen'>
        <div className='grid md:grid-cols-2 md:px-6'>
            <div>
                <img src={review} alt="registerPhoto" />
            </div>
            <div className='p-5'>
                <form onSubmit={handleSubmit} className='space-y-4 border border-gray-300 md:w-2/3 mx-auto p-5 rounded'>
                    <h3 className='text-2xl font-bold text-gray-500'>Your Valuable Reviw</h3>
                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Author Name</label>
                        <input type="text" name='name' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Short Review</label>
                        <textarea type="text" name='brief' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                    </div>


                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Say something briefly</label>
                        <textarea type="text" name='message' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor="Name" className='text-gray-400 font-semibold'>Ratings</label>
                        <input type="number" max={'5'} min="0" step='any' name='rating' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                    </div>

                    <input type='submit' value={'Review Us'} className='bg-[#0ed39e] w-full rounded py-2 font-semibold text-xl text-white hover:bg-[#09e5ab] duration-300' />

                    <Link to={`/services/${id}`} className='text-blue-600 font-semibold py-2 block hover:text-[#09e5ab] text-right'>Back to Review page</Link>
                </form>
            </div>
        </div>
    </div>
    )
}

export default AddReview