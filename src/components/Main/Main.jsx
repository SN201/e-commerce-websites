import React from 'react'
import Navbar from '../NavBar/Navbar'
import Slider from '../Slider/Slider'
import NavigateButtons from '../NavigateButton/NavigateButtons'
import ProductsSection from '../ProductsSection/ProductsSection'
import Footer from '../Footer/Footer'

function Main() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <NavigateButtons/>
      <ProductsSection/>
      <Footer/>
    </div>
  )
}

export default Main
