import React from 'react'
import './About.css';
import Me from  '../../assets/Me.jpg'
import {FaAward} from 'react-icons/fa'
import {TbCertificate} from 'react-icons/tb'
import {VscFolderActive} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1.5+ years </small>
            </article>
            <article className='about__card'>
              <TbCertificate className='about__icon'/>
              <h5>Certifications</h5>
              <small>5+ </small>
            </article>
            <article className='about__card'>
              <VscFolderActive className='about__icon'/>
              <h5>Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
          Results-driven Test Engineer with 2 years of experience in complex software testing and debugging. Skilled in writing test plans, creating test cases, and executing manual and automated tests. Additionally, proficient in MERN full-stack web development. Passionate about web development and eager to transition into a web developer role within a collaborative team that fosters a positive work culture. Committed to continuous growth and delivering high-quality solutions.
          </p>
          <a href='#contact' className='btn btn-primary'>Lets Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About