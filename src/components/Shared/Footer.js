import React from 'react';
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className='py-3 bg-blue-400 px-4'>
            <footer className="footer p-10  text-white border-b-2">
                <div>
                    <img src={logo} alt="Dencure logo" />
                    <p className='text-[16px]'>Your reliabe health partner.<br />Providing modern teeth treat till 2009</p>
                </div>
                <div className=''>
                    <span className="footer-title">Patients</span>
                    <p className="link link-hover capitalize">search for reports</p>
                    <p className="link link-hover capitalize">Login</p>
                    <p className="link link-hover capitalize">register</p>
                    <p className="link link-hover capitalize">Patient Advertisement</p>
                </div>
                <div>
                    <span className="footer-title">For Doctors</span>
                    <p className="link link-hover">Appointment</p>
                    <p className="link link-hover">Chat</p>
                    <p className="link link-hover">Login</p>
                    <p className="link link-hover">Register</p>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <p className="link link-hover">Terms of use</p>
                    <p className="link link-hover">Privacy policy</p>
                    <p className="link link-hover">Cookie policy</p>
                </div>
            </footer>
            <div className='md:flex items-center justify-between px-10 text-white font-semibold text-lg'>
                <p>&copy; Dencure {new Date().getFullYear()}. All right reserved.</p>
                <p>Terms conditions | Policy</p>
            </div>
        </div>
    )
}

export default Footer