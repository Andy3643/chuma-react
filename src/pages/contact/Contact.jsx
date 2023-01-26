import React from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <Header title='Get in touch' image={HeaderImage}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquid suscipit ad eos consequatur, dolorem impedit.
    </Header>
    <section className='contact'>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:joshandy2021@gmail.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="mailto:joshandy2021@gmail.com" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+254790552354" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>

        </div>

      </div>

    </section>



    </>
  )
}

export default Contact