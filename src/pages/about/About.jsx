import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import "./About.css"
const About = () => {
  return (
    <>
    <Header title='About us' image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dignissimos quia perspiciatis! Voluptate et illum repellendus beatae quia. Cupiditate, deserunt.
    </Header>
    {/* about */}
     <section className='about__story'>
      <div className='container about__story-container'>
        <div className='about__section-image'>
            <img src={StoryImage} alt="" />
        </div>
        <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>

        </div>
      </div>

     </section>

     {/* vision */}
     <section className='about__vision'>
      <div className='container about__vision-container'>

        <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>

        </div>
        <div className='about__section-image'>
            <img src={VisionImage} alt=" our vision" />
        </div>
      </div>

     </section>

   {/* mission */}
   <section className='about__mission'>
      <div className='container about__mission-container'>
        <div className='about__section-image'>
            <img src={MissionImage} alt="" />
        </div>
        <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam dolorum optio autem!</p>

        </div>
      </div>

     </section>

    </>
  )
}

export default About