import React from 'react'
import Yanfang from '../../assets/Yanfang.png'

export default function AboutMe() {
  return (
    <div className='d-flex flex-column content' >
      <h2>About Me</h2>
      <div className='d-flex justify-content-center align-items-center about-me'>
        <img className='yanfang' src={Yanfang} alt= "Yanfang"/>
        <div className='welcome'>
        <h3>
          Hi, I'm Yanfang.<br></br>
          Welcome to my portfolio.
        </h3>
      </div>
      </div>
      <h5>
        I am currently pursuing a career as a full-stack developer. I have undergone a professional training at UWA coding boot camp and have earned a certificate in full-stack web development. This portfolio showcases my proficiency and expertise acquired throughout the course.
      </h5>
    </div>
  )
}
