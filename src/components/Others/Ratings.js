import React from 'react';
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

const Ratings = ({rating}) => {
    const starRatings = Array.from({length:5}, (elem, index) => {
        let number = index + .5;

        return <span className='text-yellow-400' key={index}>
            {
                rating >= index + 1 ? <FaStar /> : rating >= number ? <FaStarHalfAlt /> : <AiOutlineStar />
            }
        </span>
    })
  return (
    <div className='flex items-center gap-1'>
        Ratings: {starRatings}
    </div>
  )
}

export default Ratings