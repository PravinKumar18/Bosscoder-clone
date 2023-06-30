import React from 'react'
import './Content1.css'
import college from './Images/college.jpg'

function Content1() {
  return (
    <div className='six'>
        <div className='div1'>
          <p className='contenth'>Grab your Dream <br/>Tech Offer</p> 
          <p className='contentp'>✅ A highly structured, personalized, and guided world-<br/>class program <br/>

✅ Designed by industry experts   <br/>

✅ That will make you the best of software developers out<br/> there   <br/>

✅ For ambitious learners, who don't want to settle for <br/> anything less in their tech careers</p> <br/><br/>

<button className='btn1'>Apply Now</button>
        </div>

        <div className='div2'>
            <img className='img1' src={college} />
         
        </div>
    </div>
  )
}

export default Content1