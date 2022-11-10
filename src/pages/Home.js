import React from 'react'
import About from '../components/About'
import Banner from '../components/Others/Banner'
import HomeReviews from '../components/Others/HomeReviews'
import Services from '../components/Others/Services'

const Home = () => {
  return (
    <>
    <Banner />
    <Services />
    <About />
    <HomeReviews />
    </>
  )
}

export default Home