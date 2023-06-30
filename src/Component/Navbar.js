import React from 'react'
import './Navbar.css'
import boss from "./Images/boss.svg";



function Navbar() {
  return (
    <div className='container1'>
         <img src={boss} />
        <ul className='two'>
            <li ><a className='link' href='#id'>Programs </a></li>
            <li> <a className='link' href='#id2'>Reviews </a> </li>
            <li> <a className='link' href='#id3'>Placement </a></li>
            <li> <a className='link' href='#id4'>Mentors </a></li>
        </ul>
        
        <button className='btn1'>Apply Now</button>
    </div>
  )
}

export default Navbar


