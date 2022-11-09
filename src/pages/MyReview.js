import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const MyReview = () => {
  const {user,setLoading} = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);



    useEffect(() => {
      setLoading(true)
      fetch(`http://localhost:4000/reviews/?email=${user?.email}`)
      .then(res => res.json())
      .then(data => {
        if(data.status === 'success') {
          console.log(data);
          setReviews(data.data);
        } else {
          setReviews('');
        }
      })
    }, [setLoading,user?.email])


  return (
    <div>
      {
        reviews ?
        reviews.map(review => <p>kemonachiljadfjl</p>)
        :
        <div>There have an error</div>
      }
    </div>
  )
}

export default MyReview