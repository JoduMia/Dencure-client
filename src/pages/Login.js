import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { jsonTokenAuthenticaion } from '../API/JsonAuthentication';
import registerPhoto from '../assets/images/register.png'
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
    useTitle('Login')
    const [error, setError] = useState('');
    const { signWithEmailPass, googleSignIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleSumit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        //sign in with email and password
        signWithEmailPass(email, password)
            .then(res => {
                const user = { email: res.user.email };
                if (user) {
                    jsonTokenAuthenticaion(user)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            localStorage.setItem('dencareLoginToken', data.token)
                            navigate(from, { replace: true });
                            toast.success('Successfully logged in!!!')
                        })
                        .catch(err => toast.error(err.message))
                }
            })
            .catch(error => {
                setError(error.message);
            })
    };

    //Handle google login
    const handleGoogleSignIn = () => {
        setError('');
        googleSignIn()
            .then(res => {
                const user = {email: res.user.email};
                if (user) {
                    jsonTokenAuthenticaion(user)
                        .then(res => {
                            console.log(res);
                            return res.json()
                        })
                        .then(data => {
                            console.log(data);
                            localStorage.setItem('dencareLoginToken', data.token)
                            navigate(from, { replace: true });
                            toast.success('Successfully logged in!!!')
                        })
                        .catch(err => toast.error(err.message))
                }
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    };


    return (
        <div className='flex justify-center items-center md:h-screen'>
            <div className='grid md:grid-cols-2 md:px-6'>
                <div>
                    <img src={registerPhoto} alt="registerPhoto" />
                </div>
                <div className='p-5'>
                    <form onSubmit={handleSumit} className='space-y-4 border border-gray-300 md:w-2/3 mx-auto p-5 rounded'>
                        <h3 className='text-2xl font-bold text-gray-500'>Dencure Login</h3>
                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>Email</label>
                            <input type="email" name='email' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>Password</label>
                            <input type="password" name='password' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>

                        <p className='text-red-600 font-semibold text-lg'>{error}</p>

                        <input type='submit' value={'Login'} className='bg-[#0ed39e] w-full rounded py-2 font-semibold text-xl text-white hover:bg-[#09e5ab] duration-300' />

                        <div className='flex h-[30px] items-baseline'>
                            <p className='w-[45%] h-[1px] border'></p>
                            <p className='w-[10%] text-center  text-xl text-gray-500'>or</p>
                            <p className='w-[45%] border h-[1px]'></p>
                        </div>

                        <button onClick={handleGoogleSignIn} className='bg-[#d33f0e] w-full rounded py-2 font-semibold text-xl text-white flex items-center gap-2 justify-center hover:bg-[#e54409] duration-300'><FaGoogle className='text-lg' />Login</button>

                        <Link to={'/register'} className='text-center font-semibold hover:text-[#0ed39e] duration-300 cursor-pointer text-blue-500 block'>New patient? Signup</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;