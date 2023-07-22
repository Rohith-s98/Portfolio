import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Slide1 = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Web Developer', 'JavaScript Programmer', 'Test Engineer'],
        loop: 0
      });
  return (
    <div className='slides'>
        <h5 style={{fontSize:'2rem'}}>Hello I'm</h5>
          <h1 style={{fontSize:'3.5rem'}}>Rohith <span style={{color:"yellow"}}>S</span></h1>
          <h5 className="text-light"><span style={{color:'white'}}>{text}</span>
          <Cursor cursorColor='yellow' />
          </h5>
    </div>
  )
}

export default Slide1