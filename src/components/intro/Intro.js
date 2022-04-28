import React from 'react'
import "./Intro.css"
import myImage from "../images/myimage.jpg"
import {Link} from "react-scroll"


const Intro = () => {
  return (
    <div className='i'>
      <div className='i-left'>
        <div className='i-left-wrapper'>
          <h2 className='i-name2'>Hello, I`m</h2>
          <h1 className='i-name'>Priyankesh</h1>
          <h3 className='i-desc'>I create Web Applications using Modern Technologies
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, maiores?</h3>
          
          <div className='i-tittle'>
            <div className='i-tittle-wrapper'>
              <div className='i-tittle-item'>React</div>
              <div className='i-tittle-item'>JavaScript</div>
              <div className='i-tittle-item'>MongoDB</div>
              <div className='i-tittle-item'>ExpressJS</div>
              <div className='i-tittle-item'>NodeJS</div>
            </div>
          </div>


          
        </div>
      </div>
      <div className='i-right'>
        <img src={myImage} alt="" className='i-img'/>
        <div className='i-links'>
          <h3><Link to="techstack" spy={true} smooth={true} offset={50} duration={500}>Tech Stack</Link></h3>
          <h3><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></h3>
          <h3><Link to="contacts" spy={true} smooth={true} offset={50} duration={500}>Contacts</Link></h3>
  
        </div>
      </div>
      
    </div>
  )
}
export default Intro