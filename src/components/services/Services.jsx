import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Quality Assurance (QA)</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test Planning and Strategy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test Case Design and Execution</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Manual and Automated Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Test Documentation and Reporting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Defect Management and Quality Assurance</p>
            </li>
          </ul>
        </article>

        {/* web development */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-end Development (HTML,CSS,Javascript,ReactJS)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-end Development (Node.js, Express.js)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Database Design and Integration (Mongo DB)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Web Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>RESTful API Development</p>
            </li>
          </ul>
        </article>

        {/* mechanical engineer */}
        {/* <article className='service'>
          <div className="service__head">
            <h3>Mechanical Engineering Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Engineering Analysis(CFD)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mechanical Design(CAD)</p>
            </li>
          </ul>
        </article> */}

      </div>
    </section>
  )
}

export default Services