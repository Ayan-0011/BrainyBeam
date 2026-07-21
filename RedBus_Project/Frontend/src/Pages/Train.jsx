import React from 'react'
import THeroSection from '../Components/THeroSection'
import Offers from './Train/Offer'
import Footer from '../Components/Footer'
import Cupon from './Train/Cupon'
import Banner from '../Components/Banner'

const Train = () => {
  return (
    <div>
        {/* <HeroSection /> */}
        <THeroSection/>
        <Offers/>
        <Cupon/>
        <Banner/> 
        <Footer/>
    </div>
  )
}

export default Train
