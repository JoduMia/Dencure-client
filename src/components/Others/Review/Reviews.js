import React from 'react'
import Ratings from '../Ratings'

const Reviews = ({ view }) => {
    const { img, author, rating,message } = view
    return (
        <div className='text-center p-4 shadow-lg text-black'>
            <div className='w-[200px] mx-auto block pl-12 mb-4'>
                <Ratings rating={rating} />
            </div>
            <h3 className='text-xl font-bold uppercase mb-3'>Top Quality Digitalized services</h3>
            <p className='text-sm text-gray-700 mb-4'>{message}</p>
            <div className='w-[60px] h-[60px] mx-auto rounded-full'>
                <img src={img} alt="" className='rounded-full aspect-square' />
            </div>
            <p className='py-3 text-xl font-bold'>{author}</p>
        </div>
    )
}

export default Reviews