import React from 'react'
import Yanfang from '../../assets/Yanfang.png'

export default function AboutMe() {
  return (
    <div className='d-flex flex-column content' >
      <h2>About Me</h2>
      <div className='d-flex justify-content-center'>
        <img className='yanfang' src={Yanfang} alt= "Yanfang"/>
      </div>
      <h5>
      Hello, my name is Yanfang Zhou, and I am currently pursuing a career as a full-stack developer. I have undergone a professional training at UWA coding boot camp and have earned a certificate in full-stack web development. This portfolio showcases my proficiency and expertise acquired throughout the course.
      </h5>
    </div>
  )
}
