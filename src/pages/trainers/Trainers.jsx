import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { trainers } from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './Trainers.css'
const Trainers = () => {
  return (
    <>
    <Header title='Our Trainers' image={HeaderImage}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod aliquid suscipit ad eos consequatur, dolorem impedit.
  </Header>

  <section className='trainers'>
    <div className="container trainers__container">
      {
        trainers.map(({id,image,name,job,socials})=>{
          return <Trainer key={id} name={name}  image={image} job={job} socials={[
            {icon:<BsInstagram/>,link:socials[0]},
            {icon:<AiOutlineTwitter/>,link:socials[1]},
            {icon:<FaFacebookF/>,link:socials[2]},
            {icon:<FaLinkedinIn/>,link:socials[3]}
          ]} > </Trainer>
        })
      }
    </div>
  </section>
  </>
  )
}

export default Trainers