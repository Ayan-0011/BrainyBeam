import React from 'react'
import THeroSection from '../Components/THeroSection'
import Offers from './Train/Offer'
import Footer from '../Components/Footer'
import Cupon from './Train/Cupon'
import Banner from '../Components/Banner'
import TrainFAQ from './Train/TrainFAQ'

const Train = () => {
  return (
    <div>
        {/* <HeroSection /> */}
        <THeroSection/>
        <Offers/>
        <Cupon/>
        <Banner/> 
        <TrainFAQ/>
        <Footer/>
    </div>
  )
}

export default Train
