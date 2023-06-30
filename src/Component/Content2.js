import React from 'react'
import './Content2.css'
import student from './Images/student.svg'
import working from './Images/working.jpg'

function Content2() {
  return (
    <div id='id' className='content2-top'>
        <h1 className='contenth'>Our Programs</h1>
        <p className='content2p'>Ace your skills in Problem Solving in DSA, System Design and Development</p>
       <br/>
      
        <div className='content2-bottom'>
             <div className='cart1'>
              <img className='sp' src={student} />
              <h1>For College Students</h1>
              <p className='cartp'>Who want to rocket-start their career and get placed in <br/>their dream companies.</p>
              <br/>
              <button className='btn2'>VIEW PROGRAM</button>
             </div>

             <div className='cart2'>
             <img className='sp'  src={working} />
             <h1>For Working Professionals</h1>
             <p className='cartp'>Who wish to shift to top product based companies and <br/> ace their tech careers.</p>
             <br/>
             <button className='btn2'>VIEW PROGRAM</button>
             </div>
        </div>
    </div>
  )
}

export default Content2