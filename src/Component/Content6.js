import React from 'react'
import './Content6.css'
import career from './Images/career.svg'
import career2 from './Images/career2.svg'
import career3 from './Images/career3.svg'
import career4 from './Images/career4.svg'

function Content6() {
  return (
    <div id='id3' className='content6-top'>
         <div className="top-down">
      <p className="contenth">Placement and Career Support</p>
      <p className="contentp">
      Helping students get exposed to a World of Opportunities
      </p>
      </div>

      <div className='content6-cart'>
           <div className='cart6'>
             <img className='car6img' src={career}  />
             <p className='cart6p'>Career Portfolio Optimization</p>
             <p className='car6p2'>Resume Reviews and Tips,<br/> Linkedin Profile Branding, <br/>Salary negotiation tips and <br/> much more to bring the best <br/>out of your efforts!</p>
           </div>

           <div className='cart6'>
             <img className='car6img' src={career2}  />
             <p className='cart6p'>Extensive Support by Alumni-Mentor Network</p>
             <p className='car6p2'>Referrals and Career Tips<br/> by 400+ Alumni and Mentors <br/> from top product-based companies</p>
           </div>

           <div className='cart6'>
             <img className='car6img' src={career3}  />
             <p className='cart6p'>Placement Opportunities</p>
             <p className='car6p2'>Get hired through our tie-ups <br/> with 50+ top product-based <br/>startups. Also, learn the <br/> knacks like ATS for applying<br/> on various career portals.</p>
           </div>

           <div className='cart6'>
             <img className='car6img' src={career4}  />
             <p className='cart6p'>Mock Interviews</p>
             <p className='car6p2'>Hands-on experience with <br/> Industry Experts to prepare you <br/> for a successful Interview!</p>
           </div>
      </div>

    </div>
  )
}

export default Content6