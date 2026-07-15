import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Banner from '../Components/Banner'
import Slider from '../Components/Slider'
import Testomonials from '../Components/Testtomonial'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Banner/>
      <Slider/>
      <Testomonials/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default HomePage
