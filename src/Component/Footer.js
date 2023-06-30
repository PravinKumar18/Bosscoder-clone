import React from 'react'
import './Footer.css'
import boss from "./Images/boss.svg";
import linkedin from "./Images/linkedin.svg";
import youtube from "./Images/youtube.svg";
import instagram from "./Images/instagram.svg";
import telegram from "./Images/telegram.svg";
import quora from "./Images/quora.svg";

function Footer() {
  return (
    <div className='footer-top'>
        <div className='footer-div'>
          <img src={boss} />
          <p>Helping ambitious learners upskill themselves & shift to <br/> top product based companies.</p>
          <p><span className='span'>Lets hear all about it. </span></p>
        </div>

        <div className='footer-div' >
            <p className='footerpp'>Who Are We</p>
            <ul className='ul'>
                <li className='ll'>About Us</li>
                <li className='ll'>Blog</li>
                <li className='ll'>Attend a Free Event</li>
                <li className='ll'>Privacy Policy</li>
                <li className='ll'>Terms & Conditions</li>
                <li className='ll'>Pricing & Refund Policy</li>
            </ul>

        </div>

        <div className='footer-div' >
            <p className='footerp'>Contact Us</p>
            <p>Email : <span className='email'>  ask@bosscoderacademy.com </span></p>
        </div>

        <div>
            <p className='footerp'>Follow Us On</p>
            <div className='svg'>
                <img className='svgimg' src={linkedin} />
                <p className='curser'>Linkedin</p>
            </div>

            <div className='svg'  >
                <img className='svgimg' src={youtube} />
                <p className='curser'>Youtube</p>
            </div>

            <div className='svg'>
                <img className='svgimg' src={instagram} />
                <p className='curser'>Instagram</p>
            </div>

            <div className='svg'>
                <img className='svgimg' src={telegram} />
                <p className='curser'>Telegram</p>
            </div>

            <div className='svg'>
                <img className='svgimg' src={quora} />
                <p className='curser'>Reviews on Quora</p>
            </div>
        </div>

    </div>
  )
}

export default Footer