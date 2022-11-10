import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Ratings from '../components/Others/Ratings';
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const MyReview = () => {
  useTitle('My Reviews');
  const { user, setLoading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);


  const handleDelete = (id) => {
    const agree = window.confirm('Are You sure to delete this review');

    if (agree) {
      fetch(`https://assignment-11-server-amber.vercel.app/delreview/${id}`, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            const remaining = reviews.filter(review => review._id !== id);
            setReviews(remaining);
            toast.success('Succefully Deleted')
          }
        })
    }
  };



  useEffect(() => {
    setLoading(true)
    fetch(`https://assignment-11-server-amber.vercel.app/reviews/?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          console.log(data);
          setReviews(data.data);
          setLoading(false)
        } else {
          setReviews('');
          setLoading(false);
        }
      })
  }, [setLoading, user?.email])



  return (
    <div className='container mx-auto md:px-10 py-14 px-6'>
      {reviews.length > 0 && <h1 className='text-center md:text-4xl text-2xl font-bold pb-8 capitalize text-gray-600'>My reviews On dencure</h1>}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {

          reviews.length > 0 ?
            reviews.map(({ _id, review, heading, author, message, avatar }) => (
              <div key={_id} className='text-center p-4 shadow-lg text-black'>
                <div className='w-[200px] mx-auto block pl-12 mb-4'>
                  <Ratings rating={review} />
                </div>
                <h3 className='text-xl font-bold uppercase mb-3'>{heading}</h3>
                <p className='text-sm text-gray-700 mb-4'>{message}</p>
                <div className='w-[60px] h-[60px] mx-auto rounded-full'>
                  <img src={avatar} alt="" className='rounded-full aspect-square' />
                </div>
                <p className='py-3 text-xl font-bold'>{author}</p>

                <div className='flex items-center justify-center gap-3'>
                  <Link to={`/update/${_id}`}><button className='btn btn-sm btn-primary block'>Update</button></Link>

                  <button onClick={() => handleDelete(_id)} className='btn btn-sm btn-secondary block'>Delete</button>
                </div>
              </div>
            )) :
            <div className='md:col-span-2 lg:col-span-3 flex flex-col items-center justify-center h-[60vh] space-y-6'>
              <p className='text-2xl md:text-4xl text-blue-600 font-bold'>You have no review to display!!!</p>
              <Link to={'/services'}><button className='btn btn-sm btn-primary'>Please Add review !!!</button></Link>
            </div>
        }
      </div>
    </div>

  )
}

export default MyReview