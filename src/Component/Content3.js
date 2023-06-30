import React from 'react'
import './Content3.css'
import microsoft from './Images/microsoft.svg'
import google from './Images/google.svg'
import amazon from './Images/amazon.svg'
import paypal from './Images/paypal.svg'
import meta from './Images/meta.svg'
import samsung from './Images/samsung.svg'
import swiggy from './Images/swiggy.svg'
import flipkart from './Images/flipkart.svg'
import goldman from './Images/goldman.svg'
import dell from './Images/dell.svg'
import adobe from './Images/adobe.svg'
import jpmorgan from './Images/jpmorgan.svg'
import barclays from './Images/barclays.svg'
import cleartrip from './Images/cleartrip.svg'
import myntra from './Images/myntra.svg'

function Content3() {
  return (
    <div className='content3-top'>
        <h1>1000+ Successful Alumni working at Top Product- <br/>Based Companies!</h1>

        <div className='imgdiv'>
        <img src={microsoft} />
        <img src={google} />
        <img src={amazon} />
        <img src={paypal} />
        <img src={cleartrip} />
        <br/>
        <img src={meta} />
        <img src={samsung} />
        <img src={swiggy} />
        <img src={adobe} />
        <img src={myntra} />
        <br/>
        <img src={flipkart} />
        <img src={goldman} />
        <img src={dell} />
        <img src={jpmorgan} />
        <img src={barclays} />
        </div>
    </div>
  )
}

export default Content3