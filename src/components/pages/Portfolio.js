import React from 'react'
import codingQuiz from '../../assets/coding-quiz.png'
import weatherDashboard from '../../assets/weather-dashboard.png'
import workDayScheduler from '../../assets/work-day-scheduler.gif'
import travelpedia from '../../assets/travelpedia.png'
import techBlog from '../../assets/The-tech-blog.png'
import SwoleMateAndBuffBae from '../../assets/SwoleMate-and-BuffBae.png'
import github from '../../assets/github.png'

export default function Portfolio() {
  return (
    <div className='content'>
      <h2>Portfolio</h2>
      <div className='card-container'>
        <div className='cards' >
          <img src={codingQuiz} alt= "coding quiz application"/>
          <a href='https://zhou7cathy.github.io/Web-APIs-Challenge-Code-Quiz/'><p>Coding Quiz</p></a>
          <a href = "https://github.com/zhou7cathy/Web-APIs-Challenge-Code-Quiz" ><img className= "github" src={github} alt= "icon of github"/></a>
          <h6>This timed quiz was created for coding boot camp student who wants to gauge the progress on JavaScript fundamentals compare to peers.</h6>
        </div>
        <div className='cards' >
          <img src={weatherDashboard} alt= "weather dashboard application"/>
          <a href='https://zhou7cathy.github.io/Weather-dashboard/'><p>Weather Dashboard</p></a>
          <a href = "https://github.com/zhou7cathy/Weather-dashboard" ><img className= "github" src={github} alt= "icon of github"/></a>
          <h6>This weather dashboard was created for traveler who wants to see the weather outlook for multiple cities in order to plan a trip accordingly.</h6>
        </div>
        <div className='cards' >
          <img src={workDayScheduler} alt= "work day scheduler"/>
          <a href='https://zhou7cathy.github.io/Work-Day-Scheduler/'><p>Work Day Scheduler</p></a>
          <a href = "https://github.com/zhou7cathy/Work-Day-Scheduler" ><img className= "github" src={github} alt= "icon of github"/></a>
          <h6>The Work Day Scheduler was created for users with a busy schedule, who wants to add important events to daily planner in order to manage the time effectively.</h6>
        </div>
        <div className='cards' >
          <img src={travelpedia} alt= "travelpedia-a currency exchange application"/>
          <a href='https://zhou7cathy.github.io/Travelpedia-app/'><p>Travelpedia</p></a>
          <a href = "https://github.com/zhou7cathy/Travelpedia-app" ><img className= "github" src={github} alt= "icon of github"/></a>
          <h6>The Travelpedia App allows users to see the current exchange rate between countries. It also allows users to view the local financial news stories about the destination, so they can be aware of any possible impacts on exchange/travel.</h6>
        </div>
        <div className='cards' >
          <img src={techBlog} alt= "tech blog"/>
          <a href='https://secret-escarpment-59821.herokuapp.com/'><p>Tech Blog</p></a>
          <a href = "https://github.com/zhou7cathy/Tech-Blog" ><img className= "github" src={github} alt= "icon of github"/></a>
          <h6>This application is created developers who want a CMS-style blog site so they can publish articles, blog posts,and their thoughts and opinions.</h6>
        </div>
        <div className='cards' >
          <img src={SwoleMateAndBuffBae} alt= "SwoleMate and BuffBae an easy to use fitness tracker"/>
          <a href='https://gentle-garden-16426.herokuapp.com/'><p>SwoleMate & BuffBae</p></a>
          <a href = "https://github.com/zhou7cathy/Fitness-Application" ><img className= "github" src={github} alt= "icon of github"/></a>
          <h6>The SwoleMate & BuffBae application is an easy-to-use fitness tracker for the users. It records your day-to-day physical activities. Providing a variety of visuals to display your progress. As well as the most popular workout trends on our site.</h6>
        </div>
      </div>
    </div>
  )
}
