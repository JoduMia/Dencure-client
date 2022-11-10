import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/about.png'

const About = () => {
  return (
    <div className='container mx-auto px-6 md:px-10 py-10'>
        <div className='grid md:grid-cols-2 gap-5'>
            <div className='md:ml-10 md:px-10'>
                <div>
                <h1 className='text-3xl md:text-5xl text-bold text-[#200ccb]'>We care of</h1><br/>
                <h1 className='text-3xl md:text-5xl text-bold text-[#200ccb]'>your teeth</h1><br/>
                <h1 className='text-3xl md:text-5xl text-bold text-[#200ccb]'>and smile</h1>
                </div>

                <p>To protect your oral health, practice good oral hygiene daily. Brush your teeth at least twice a day for two minutes each time. Use a soft-bristled brush and fluoride toothpaste. Floss daily.</p>

                <p className='mb-5'>You may have a good oral hygiene routine at home that promotes having a healthy mouth. However, regular dental cleanings are essential to your oral health.</p>

                <Link to={'/servicepagi'} className='btn btn-success'>Get Treatment</Link>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default About