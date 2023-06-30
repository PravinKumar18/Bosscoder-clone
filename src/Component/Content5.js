import React from "react";
import "./Content5.css";
import class2 from "./Images/class2.jpg";
import class3 from "./Images/class3.jpg";
import class4 from "./Images/class4.jpg";
import logo1 from "./Images/logo1.svg";
import logo2 from "./Images/logo1.svg";
import logo3 from "./Images/logo3.svg";
import logo4 from "./Images/logo4.svg";
import logo5 from "./Images/logo5.svg";
import logo6 from "./Images/logo6.svg";

function Content5() {
  return (
    <div className="content5-top">
      <div className="top-down">
        <p className="contenth">Bosscoder end-to-end solutions</p>
        <p className="contentp">
          to give you an immersive learning experience and help you ace in your
          tech career
        </p>
      </div>

      <div className="content5-display">
        <div>
          <div className="logodiv">
            <img className="logoimg" src={logo1} />
            <p className="contentp5">
              World-class curriculum, designed by industry
              <br /> experts
            </p>
          </div>
          
          
          <div className="logodiv">
            <img className="logoimg" src={logo2} />
            <p className="contentp5">
            Live classes by instructors working in top tech <br/> companies
            </p>
          </div>
          
          <div className="logodiv">
            <img className="logoimg" src={logo3} />
            <p className="contentp5">
            Daily hand picked problems & weekly contents <br/> with quick doubt solving
            </p>
          </div>
         
          <div className="logodiv">
            <img className="logoimg" src={logo4} />
            <p className="contentp5">
            Highly motivated peer community to learn and<br/> grow with
            </p>
          </div>

          <div className="logodiv">
            <img className="logoimg" src={logo5} />
            <p className="contentp5">
            Regular 1:1 Mentorship sessions and Mock <br/> Interviews
            </p>
          </div>

          <div className="logodiv">
            <img className="logoimg" src={logo6} />
            <p className="contentp5">
            Develop industry-relevant projects based on real- <br/>world examples
            </p>
          </div>
          
        </div>

        <div className="content5-img">
          <img src={class2} /> <br />
          <img src={class3} />
          <br />
          <img src={class4} />
        </div>
      </div>
    </div>
  );
}

export default Content5;
