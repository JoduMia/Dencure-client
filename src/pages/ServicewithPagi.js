import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { FcViewDetails } from 'react-icons/fc';
import { Link } from 'react-router-dom'
import ImageView from '../components/Others/ImageViewer/ImageView';
import Ratings from '../components/Others/Ratings';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const ServiceWithPagi = () => {
    useTitle('Servicess')
    const {loading, setLoading} = useContext(AuthContext);
    const [services, setServices] = useState([]);
    const [count, setCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [dataPerpage, setDataPerpage] = useState(10);
    const totalPages = Math.ceil(count / dataPerpage);

    useEffect(() => {
        setLoading(true);
        fetch(`https://assignment-11-server-amber.vercel.app/servicewithpagi/?page=${currentPage}&size=${dataPerpage}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count);
                setServices(data.products);
                setLoading(false)
            })
            .catch(error => {

            })
    }, [currentPage, dataPerpage,setLoading])

    //slicing the description data length over 100 characters
    const truncate = (desc) => {
        if (desc.length > 100) {
            return (`${desc.slice(0, 100)}...`);
        } else {
            return desc;
        }
    };

    return (
        <> {!loading ?
            <div className='py-14 container mx-auto lg:px-10'>
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
            :
            <div className='flex items-center justify-center p-10'><progress className="progress w-56"></progress></div>
            }
        </>
    )
}

export default ServiceWithPagi