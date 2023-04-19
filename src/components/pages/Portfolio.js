import React from 'react'
import codingQuiz from '../../assets/coding-quiz.png'
import weatherDashboard from '../../assets/weather-dashboard.png'
import workDayScheduler from '../../assets/work-day-scheduler.gif'
import travelpedia from '../../assets/travelpedia.png'
import techBlog from '../../assets/The-tech-blog-login.png'
import SwoleMateAndBuffBae from '../../assets/SwoleMate-and-BuffBae.png'
import github from '../../assets/github.png'

const styles = {
  card: {
    padding: '10px',
    textAlign: 'center',
    borderStyle: 'solid',
    borderWidth: '1px',
    maxWidth: '40%',
    margin:'0 0 20px 10px',
  },
};


export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className='card-container'>
        <div style={styles.card}>
          <img src={codingQuiz} alt= "coding quiz application"/>
          <a href='https://zhou7cathy.github.io/Web-APIs-Challenge-Code-Quiz/'><p>Coding Quiz</p></a>
          <a href = "https://github.com/zhou7cathy/Web-APIs-Challenge-Code-Quiz" ><img className= "github" src={github} alt= ""/></a>
        </div>
        <div style={styles.card}>
          <img src={weatherDashboard} alt= "weather dashboard application"/>
          <a href='https://zhou7cathy.github.io/Weather-dashboard/'><p>Weather Dashboard</p></a>
          <a href = "https://github.com/zhou7cathy/Weather-dashboard" ><img className= "github" src={github} alt= ""/></a>
        </div>
        <div style={styles.card}>
          <img src={workDayScheduler} alt= "work day scheduler"/>
          <a href='https://zhou7cathy.github.io/Work-Day-Scheduler/'><p>Work Day Scheduler</p></a>
          <a href = "https://github.com/zhou7cathy/Work-Day-Scheduler" ><img className= "github" src={github} alt= ""/></a>
        </div>
        <div style={styles.card}>
          <img src={travelpedia} alt= "travelpedia-a currency exchange application"/>
          <a href='https://zhou7cathy.github.io/Travelpedia-app/'><p>Travelpedia</p></a>
          <a href = "https://github.com/zhou7cathy/Travelpedia-app" ><img className= "github" src={github} alt= ""/></a>
        </div>
        <div style={styles.card}>
          <img src={techBlog} alt= "tech blog"/>
          <a href='https://secret-escarpment-59821.herokuapp.com/'><p>Tech Blog</p></a>
          <a href = "https://github.com/zhou7cathy/Tech-Blog" ><img className= "github" src={github} alt= ""/></a>
        </div>
        <div style={styles.card}>
          <img src={SwoleMateAndBuffBae} alt= "SwoleMate and BuffBae an easy to use fitness tracker"/>
          <a href='https://gentle-garden-16426.herokuapp.com/'><p>SwoleMate & BuffBae</p></a>
          <a href = "https://github.com/zhou7cathy/Fitness-Application" ><img className= "github" src={github} alt= ""/></a>
        </div>
      </div>
    </div>
  )
}
