import React from 'react'
import './Content4.css'
import rahul from './Images/rahul.jpg'
import nancy from './Images/nancy.jpg'
import rohan from './Images/rohan.jpg'
import google from './Images/google.svg'
import paypal from './Images/paypal.svg'
import amazon from './Images/amazon.svg'

function Content4() {
  return (
    <div id='id2' className='content4-top'>
        <p className='contenth' >Get inspired by someone like you</p>
        <p className='contentp'>Who is now living their dream at top-tech companies</p>

        <div className='profiles'>
            <div className='cart3'>
                <div className='cart-property'>
                    <div>
                <img className='rahul' src={rahul} />
                     </div>

                     <div>
                <h3> Rahul Sharma</h3>
                     <img src={google} />
                     </div>

                </div>
                   <p className='profilep'>"It is an intensive program, where 3-4 hours of effort is required from your side also everyday. Some key features which I liked: Live classes: High quality & best teachers. Syllabus: Best curriculum, we had very good level classes on DS & Algo. Mentors: Regular mentor sessions to track your progress and setting milestones. Mock Interviews: to find weakness and work on them."</p>
            </div>

            <div className='cart3'>
            <div className='cart-property'>
            <img className='rahul' src={nancy} />
            <div>
            <h3> Pooja Parihar </h3>
            <img src={amazon} />
            </div>
            </div>
                   <p  className='profilep' >"Bosscoder gives you everything starting from Data Structures and Algorithms, High Level and Low Level Design followed CS Fundamentals and then a Web Dev project. In this structured training, with a minimum hard work of 3-4 hours daily and by the help of the instructors, I can definitely see myself improving. I have learned to solve hard problems at Bosscoder Academy."</p>
            </div>

            <div className='cart3'>
            <div className='cart-property'>

            <img className='rahul' src={rohan} />
            <div>
                <h3>Mehul Panchal</h3>
                <img src={paypal} />
            </div>
            </div>
                   <p  className='profilep'>"After evaluating a lot of options, I decided to join Bosscoder Academy, and it indeed turned out to be a good decision. To put it in a nutshell, the course really emphasizes on all the required concepts and is more learning focused, making you strong in DS Algo and System Design. I have been benefitted due to this, and recently got selected in PayPal as SDE3."</p>
            </div>
        </div>

        <br/>
        <br/>

        <button className='profilebtn'>Read More Reviews</button>
    </div>
  )
}

export default Content4