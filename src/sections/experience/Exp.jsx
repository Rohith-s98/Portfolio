import React from 'react';
import './Exp.css';
import {BsPatchCheckFill}from 'react-icons/bs';
import {fronEndSkills,backEndSkills} from '../../utility/skill'


function Exp() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {
              fronEndSkills.map(({id,skill,level})=> {
                return (
                <article key={id} className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>{skill}</h4>
                <small className='text-light'>{level}</small>
                </div>
              </article>)
              })
            }
            
          </div>
        </div>
        {/* backend */}
        <div className='experience__frontend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
          {
              backEndSkills.map(({id,skill,level})=> {
                return (
                <article key={id} className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                <h4>{skill}</h4>
                <small className='text-light'>{level}</small>
                </div>
              </article>)
              })
            }
            
          </div>
        </div>
      </div> 
    </section>
  )
}

export default Exp