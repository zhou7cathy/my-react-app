import React from 'react'

import resume from '../../assets/Resume.pdf'

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my <a href={resume} download="Resume">resume</a>
      </p>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  )
}
