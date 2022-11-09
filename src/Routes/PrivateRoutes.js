import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider'

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading) {
        return <div className='flex items-center justify-center py-6'><progress className="progress w-56"></progress></div>
    }

    if(!user) {
        return <Navigate to={'/login'} state={{from: location}} replace />
    }
    return children;
}

export default PrivateRoutes