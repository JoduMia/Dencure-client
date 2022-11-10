import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Ratings from '../Ratings'

const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/review/${id}`)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                setReviews(data)
            })
    }, [id])
    
    return (

        <div className='grid md:grid-cols-3 gap-4'>
            {
                reviews.map(({review, heading,author,message,avatar}) => (
                    <div className='text-center p-4 shadow-lg text-black'>
                        <div className='w-[200px] mx-auto block pl-12 mb-4'>
                            <Ratings rating={review} />
                        </div>
                        <h3 className='text-xl font-bold uppercase mb-3'>{heading}</h3>
                        <p className='text-sm text-gray-700 mb-4'>{message}</p>
                        <div className='w-[60px] h-[60px] mx-auto rounded-full'>
                            <img src={avatar} alt="" className='rounded-full aspect-square' />
                        </div>
                        <p className='py-3 text-xl font-bold'>{author}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default Reviews