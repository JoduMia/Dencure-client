import React, { useContext } from 'react'
import { FaHome } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom'
import ImageView from '../components/Others/ImageViewer/ImageView';
import Ratings from '../components/Others/Ratings';
import Reviews from '../components/Others/Review/Reviews';
import { AuthContext } from '../contexts/AuthProvider';

const ServiceDetail = () => {
    const {user} = useContext(AuthContext);
    const { _id, title, price, ratings, desc, photo, reviews } = useLoaderData();
    return (
        <div className='container mx-auto md:px-8 py-14'>
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

            <div>
                <h1 className='text-center text-2xl md:text-4xl font-bold text-gray-900 capitalize py-10'>What they're saying</h1>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        reviews.map(view => <Reviews key={view.updated} view={view} />)
                    }
                </div>
            </div>

            <div className='text-center py-10'>
                <Link to={`/review/${_id}`}>
                    <button className='btn btn-primary'>
                        {
                            user? "Add Your Review" : "Please, Login to Add Review !!!"
                        }
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceDetail