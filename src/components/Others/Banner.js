import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'

const datas = [
    {
        img: img1,
        id: 1,
        next: 2,
        prev: 6
    },
    {
        img: img2,
        id: 2,
        next: 3,
        prev: 1
    },
    {
        img: img3,
        id: 3,
        next: 4,
        prev: 2
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full">
            {datas.map(({ id, prev, next, img }) => (
                <div key={id} id={`slide${id}`} className="carousel-item relative w-full img-gradient -z-0">
                    <img alt='' src={img} className="w-full md:max-h-[550px] rounded-md" />

                    <div className="absolute transform -translate-y-1/2 gap-3 top-1/2 left-12 text-white z-20 space-y-4">
                        <div className='text-3xl md:text-5xl font-extrabold'>
                            <h1>Healthy teeth</h1>
                            <h1>Fresh Smile</h1>
                            <h1>Be confident</h1>
                        </div>
                        <p className='w-1/2 text-white'>There are many variations of treatment of  available, but the majority have suffered alteration in some form</p>
                        <div className='space-x-3'>
                            <button className="btn btn-sm btn-warning">Warning</button>
                            <button className="btn btn-sm btn-outline btn-warning">Warning</button>
                        </div>
                    </div>
                    <div className="absolute flex  transform -translate-y-1/2 gap-3 right-5 bottom-3 z-10">
                        <a href={`#slide${prev}`} className="btn btn-circle hover:bg-[#ff3811]">❮</a>
                        <a href={`#slide${next}`} className="btn btn-circle hover:bg-[#ff3811]">❯</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Banner