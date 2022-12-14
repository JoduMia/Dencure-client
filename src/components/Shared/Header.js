import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { FaHamburger, FaSignInAlt } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import logo from '../../assets/images/logo.png'
import { BsSearch } from 'react-icons/bs';
import { AuthContext } from '../../contexts/AuthProvider';
import { useState } from 'react';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const signOut = () => {
    logOut().then(() => {
      alert(`successfully logged out`)
    })
  };

  return (
    <div>
      <div className="navbar bg-[#eef5f2] py-4 shadow">
        <div className="flex-1 h-[50px]">
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" className='h-[50px]' />
          </Link>
        </div>
        <div className="flex-none text-black hidden md:block">
          <ul className="menu menu-horizontal p-0">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/servicepagi'}>Services</Link></li>
            {
              user &&
              <div className='flex items-center justify-between'>
                <li tabIndex="0">
                  <Link to={'/addservice'}>Add service </Link>
                </li>
                <li tabIndex="0">
                  <Link to={'/myreviews'}>My reviews </Link>
                </li>
              </div>
            }
            <li><Link to={'/blogs'}>Blogs</Link></li>
          </ul>
        </div>


        <div onClick={() => setOpen(!open)} className='md:hidden text-3xl text-gray-400 mr-2'>
          {
            open ?
              <ImCross /> :
              <FaHamburger />
          }
        </div>
        <div className="flex-none gap-2">
          <div className="form-control hidden md:block">
            <div className='flex items-center p-2 border border-gray-300 rounded-lg'>
              <input type="text" placeholder="Search" className='focus:outline-none bg-[#eef5f2]' />
              <BsSearch />
            </div>
          </div>
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img title={user?.displayName} src={user?.photoURL} alt='' />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/' className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li><Link to='/'>Settings</Link></li>
                  <li><button onClick={signOut} className='btn btn-sm'>Logout</button></li>
                </ul>
              </div>
            ) : (
              <div className='flex items-center gap-1 hover:bg-gray-300 p-2 rounded hover:text-[#3431bb] font-semibold duration-300'>
                <Link to={'login'}>Login</Link>
                <FaSignInAlt />
              </div>
            )}
          </div>
        </div>
      </div>
      {
        open && <div className='bg-[#000000bf] text-center md:hidden gap-10 text-white flex flex-col w-[50%] p-3 absolute text-xl z-50 h-full'>
        <Link to={'/'}>Home</Link>
        <Link to={'/servicespagi'}>Services</Link>
        {
          user && <div className='flex-col flex gap-10'>
            <Link to={'/addservice'}>Add Service</Link>
            <Link to={'/myreview'}>My Reviews</Link>
          </div>
        }
      </div>
      }
    </div>

  )
}

export default Header;

