import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import registerPhoto from '../assets/images/register.png'
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {
    const {emailPassRegister} = useContext(AuthContext);

    //create user at firebase with email and password
    const createUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        emailPassRegister(email, password)
            .then(res => {
                console.log(res.user);
            })
    };

















    return (
        <div className='flex justify-center items-center md:h-screen'>
            <div className='grid md:grid-cols-2 md:px-6'>
                <div>
                    <img src={registerPhoto} alt="registerPhoto" />
                </div>
                <div className='p-5'>
                    <form onSubmit={createUser} className='space-y-4 border border-gray-300 md:w-2/3 mx-auto p-5 rounded'>
                        <h3 className='text-2xl font-bold text-gray-500'>Patient Signup</h3>
                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>Name</label>
                            <input type="text" name='name' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>Email</label>
                            <input type="email" name='email' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="Name" className='text-gray-400 font-semibold'>Password</label>
                            <input type="password" name='password' className='bg-white border border-gray-400 py-1 px-3 text-gray-800 focus:outline-none rounded' required />
                        </div>
                        <Link to='/login' className='text-right block text-blue-500 font-semibold hover:text-[#0ed39e] duration-300'>Already have an account?</Link>
                        <input type='submit' value={'Signup'} className='bg-[#0ed39e] w-full rounded py-2 font-semibold text-xl text-white hover:bg-[#09e5ab] duration-300' />

                        <div className='flex h-[30px] items-baseline'>
                            <p className='w-[45%] h-[1px] border'></p>
                            <p className='w-[10%] text-center  text-xl text-gray-500'>or</p>
                            <p className='w-[45%] border h-[1px]'></p>
                        </div>

                        <button className='bg-[#d33f0e] w-full rounded py-2 font-semibold text-xl text-white flex items-center gap-2 justify-center hover:bg-[#e54409] duration-300'><FaGoogle className='text-lg' />Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register