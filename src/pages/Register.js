import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { jsonTokenAuthenticaion } from '../API/JsonAuthentication';
import registerPhoto from '../assets/images/register.png'
import { AuthContext } from '../contexts/AuthProvider';
import useTitle from '../hooks/useTitle';

const Register = () => {
    useTitle('Register');
    const { emailPassRegister,loading,setLoading } = useContext(AuthContext);

    //create user at firebase with email and password
    const createUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();

        emailPassRegister(email, password)
            .then(res => {
                const user = { email: res.user.email };
                if (user) {
                    jsonTokenAuthenticaion(user)
                        .then(res => {
                            console.log(res);
                            return res.json()
                        })
                        .then(data => {
                            console.log(data);
                            localStorage.setItem('dencareLoginToken', data.token)
                            toast.success('Successfully logged in!!!')
                            setLoading(false)
                        })
                        .catch(err => toast.error(err.message))
                }
            }).catch(err => console.log(err.message))
            .finally(() => {
                setLoading(false)
            })
    };

    return (
        (!loading) ?
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

                    </form>
                </div>
            </div>
        </div>
        :
        <div className='flex justify-center items-center h-[300px]'><progress className="progress w-56"></progress></div>
    )
}

export default Register