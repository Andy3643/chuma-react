import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'
const MainHeader = () => {
  return (
    <header>
      <div className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <h4>#100DaysOfWorkout</h4>
            <h1>Join the legends of the Fitness World</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam impedit facilis doloribus.</p>
            <Link to='/plans' className='btn lg'>Get Started</Link>
          </div>
          <div className="main__header-right">
            <div className="main__header-circle"></div>
            <div className="main__header-image">
              <img src={Image} alt="header img" />
            </div>

          </div>

        </div>
      </div>
    </header>
  )
}

export default MainHeader