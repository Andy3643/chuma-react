import React from 'react'
import FAQ from '../../components/FAQ'
import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Values from '../../components/Values'
import './Home.css'

const Home = () => {
  return (
    <>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FAQs/>
      <FAQ/>
    </>
  )
}

export default Home