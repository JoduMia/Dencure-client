import React from 'react'
import { FcViewDetails } from 'react-icons/fc';
import { Link, useLoaderData } from 'react-router-dom'
import useTitle from '../../hooks/useTitle';
import ImageView from './ImageViewer/ImageView';
import Ratings from './Ratings';

const AllServices = () => {
    useTitle('Services')
    const services = useLoaderData();
    console.log(services);

    //slicing the description data length over 100 characters
    const truncate = (desc) => {
        if (desc.length > 100) {
            return (`${desc.slice(0, 100)}...`);
        } else {
            return desc;
        }
    };

    return (
        <>
            {/* {services ? ( */}
            <div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-14'>
                    {services.map(({ _id, title, photo, price, ratings, desc }) => (
                        <div key={_id} className='p-3 rounded border border-gray-50 shadow'>
                            <div className='overflow-hidden z-40'>
                                <ImageView photo={photo} />
                            </div>
                            <div className='p-1 space-y-2 text-black'>
                                <h3 className='text-xl font-bold'>{title}</h3>
                                <div className='flex items-center justify-between'>
                                    <p className='text-md font-semibold'>Price:<span className='font-bold'> ${price}</span></p>
                                    <Ratings rating={ratings} />
                                </div>
                                <p>{truncate(desc)}</p>
                                <Link to={`/services/${_id}`}>
                                    <button className='btn btn-sm btn-primary'>View Details
                                        <FcViewDetails className='text-lg ml-2' /></button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* ) : (
                <div className='flex items-center flex-col justify-center h-screen text-center md:text-4xl text-red-600 font-bold'>
                    <h1>Oops !!!</h1>
                    <p>Error happend! Couldn't fetch the Data successfully.</p>
                </div>
            )
            } */}
        </>
    )
}

export default AllServices