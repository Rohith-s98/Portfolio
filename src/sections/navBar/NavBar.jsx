import React,{useState} from 'react';
import './NavBar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {AiOutlineProject} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';

const NavBar = () => {
    const [active, setActive] = useState('#')
  return (
    <nav id='nav'>
        <a href="#" className={active==='#'?'active':''} onClick={() => setActive('#')}><AiOutlineHome/></a>
        <a href="#about" className={active==='#about'?'active':''} onClick={() => setActive('#about')} ><AiOutlineUser/></a>
        <a href="#experience" className={active==='#experience'?'active':''} onClick={() => setActive('#experience')} ><BiBook/></a>
        <a href="#services" className={active==='#services'?'active':''} onClick={() => setActive('#services')} ><RiServiceLine/></a>
        <a href="#projects" className={active==='#projects'?'active':''} onClick={() => setActive('#projects')} ><AiOutlineProject/></a>
        <a href="#contact" className={active==='#contact'?'active':''} onClick={() => setActive('#contact')} ><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default NavBar;