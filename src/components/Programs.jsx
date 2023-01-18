import React from 'react'
import {FaCrown} from 'react-icons/fa'
import {AiFillCaretRight} from 'react-icons/ai'
import SectionHead from './SectionHead'
import {programs} from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <section className='programs'>
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Programs"/>
        </div>
        <div className="programs_wrapper">
            {
                programs.map(({id,icon,title,info,path})=>{
                    return <Card className='programs__program' key={id}>
                        <span>{icon}</span>
                        <span>{title}</span>
                        <small>{info}</small>
                        <Link to={path} className='btn sm'>Learn more<AiFillCaretRight/></Link>
                    </Card>
                })
            }
        </div>
    </section>
  )
}

export default Programs