import React from 'react'
import { FaHome } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'
import ImageView from '../components/Others/ImageViewer/ImageView';
import Ratings from '../components/Others/Ratings';

const ServiceDetail = () => {
    const { title, price, ratings, desc, photo } = useLoaderData();
    return (
        <div className='p-3 rounded border border-gray-50 shadow md:w-1/2 mx-auto'>
            <div className='overflow-hidden z-40'>
                <ImageView photo={photo} />
            </div>
            <div className='p-1 space-y-2 text-black'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <div className='flex items-center justify-between'>
                    <p className='text-md font-semibold'>Price:<span className='font-bold'> ${price}</span></p>
                    <Ratings rating={ratings} />
                </div>
                <p className='text-justify'>{desc}</p>
                <Link to={`/services`}>
                    <button className='btn btn-sm btn-primary mt-4'>
                        <FaHome className='text-lg mr-2' />Back to services</button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceDetail