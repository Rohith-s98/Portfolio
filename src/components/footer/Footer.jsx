import React from 'react';
import "./Footer.css";
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer >
        <a href="#" className='footer__logo'>RS</a>
        {/* <ul className="permalinks">
            <li><a href="#"></a>Home</li>
        </ul> */}
        <div className='footer__socials'>
            <a href="https://twitter.com/"><FaTwitter/></a>
        </div>
    </footer>
  )
}

export default Footer