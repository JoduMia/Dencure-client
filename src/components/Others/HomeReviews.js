import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Ratings from './Ratings';


const HomeReviews = ({ id }) => {
    const [reviews, setReviews] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [dataPerpage, setDataPerpage] = useState(10);
    const totalPages = Math.ceil(count / dataPerpage);

    useEffect(() => {
        fetch(`http://localhost:4000/allreviews/?page=${currentPage}&size=${dataPerpage}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setReviews(data.products);
            })
            .catch(error => {

            })
    }, [currentPage, dataPerpage])

    return (
        <div className='py-14 container mx-auto lg:px-10'>
            <h1 className='text-2xl md:text-4xl text-center font-bold capitalize pb-6'>testimonials</h1>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    reviews.map(({ review, heading, author, message, avatar }) => (
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

            <div className='flex items-center justify-center py-5 gap-4'>
                    <button className='btn btn-secondary btn-sm disabled:text-black' onClick={() => setCurrentPage(currentPage-1)} disabled={currentPage === 0 && true}>Prev</button>
                    {
                        [...Array(totalPages).keys()].map(num => (
                            <button
                            onClick={() => setCurrentPage(num)}
                            className={currentPage === num ? 'bg-blue-600 py-1 px-2 rounded text-lg text-black font-bold' : 'bg-slate-300 py-1 px-2 rounded text-lg text-black font-bold'}
                            key={num}>{num}</button>
                        ))
                    }
                    <button className='btn btn-secondary btn-sm disabled:text-black' onClick={() => setCurrentPage(currentPage+1)} disabled={currentPage === totalPages-1 && true}>Next</button>

                    <select className='bg-yellow-400 font-bold text-black py-1 px-2 rounded' defaultValue={10} onChange={e => setDataPerpage(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
        </div>
    )
}

export default HomeReviews