import React from 'react';
import iconImage from '../../assets/book.ico';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <img src={iconImage} className='w-10' alt=""/>
          <h2><span className='text-4xl text-blue-400'>Boi</span><span className='text-4xl font-bold text-orange-400'>Poka</span></h2>
        </aside>
          <p >Copyright © {new Date().getFullYear()} - BoiPoka  All right reserved.</p>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
          <FaFacebook  size={30} fill='blue'/>
          </a>
          <a>
          <FaInstagram size={30} fill='tomato'/> 
          </a>
          <a>
          <FaLinkedin size={30} fill='blue'/>
          </a>
        </nav>
      </footer>
    );
};

export default Footer;