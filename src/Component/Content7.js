import React from "react";
import "./Content7.css";
import rajat from "./Images/rajat.jpg";
import microsoft from "./Images/microsoft.svg";
import google from "./Images/google.svg";
import meta from "./Images/meta.svg";
import paypal from "./Images/paypal.svg";
import manish from "./Images/manish.jpg";
import akshat from "./Images/akshat.jpg";
import vikash from "./Images/vikash.jpg";

function Content7() {
  return (
    <div id="id4" className="content7-top">
        <div className="top-down">
      <p className="contenth">Excited? Meet our Instructors & Mentors</p>
      <p className="contentp">
        Our tutors have built scalable systems and realise the real-life
        importance of DSA and System Design, <br /> not just in interviews but
        throughout their career
      </p>
      </div>
      <div className="content7-cart">
        <div className="cart7">
          <img className="img7" src={rajat} />
          <h3 className="pp">Rajat Garg</h3>
          <img className="pm" src={microsoft} />
        </div>

        <div className="cart7">
          <img className="img7" src={akshat} />
          <h3 className="pp">Akshat Gupta</h3>
          <img className="pm" src={google} />
        </div>

        <div className="cart7">
          <img className="img7" src={manish} />
          <h3 className="pp">Rajat Garg</h3>
          <img className="pm" src={meta} />
        </div>

        <div className="cart7">
          <img className="img7" src={vikash} />
          <h3 className="pp">Vikash Sharma</h3>
          <img className="pm" src={paypal} />
        </div>
      </div>
    </div>
  );
}

export default Content7;
