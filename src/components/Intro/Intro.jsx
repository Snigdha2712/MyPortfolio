import React from 'react';
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import LinkedIn from "../../img/linked.jpeg";
import Instagram from "../../img/insta1.jpeg";
import Github from "../../img/github2.jpeg";
import me from "../../img/2022-01-20-16-35-39-617.jpg";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import emoji from "../../img/glassesimoji.png";
import {motion} from 'framer-motion';
const Intro = () => {
  const transition ={duration:5, type: 'spring'}
  return (
    <div className=" Intro ">
         <div className="i-left">
            <div className="i-name">
                <span>Hi! I Am </span>
                <span>Snigdha Singh </span>
                <span> A Web developer and Mathematics enthusiast</span>
            </div>
            <div className="i-icons">
              <a href="https://github.com/Snigdha2712" > <img src={Github} alt=""/></a>
              <a href="https://www.linkedin.com/in/snigdha-singh-09b729228 "><img src={LinkedIn} alt=""/></a>
              <a href="https://instagram.com/snigdhasingh_27?igshid=MWM2YjBjM2Q="><img src={Instagram} alt="" /></a>
            </div>
         </div>
         <div className="i-right">
            <img src={me} alt="" />
            <motion.img
            initial={{left : '-36%'}}
            whileInView={{left: '-24%'}}
            transition={transition}
            src={emoji} alt=""/>

            <motion.div
            initial={{top: '-4%', left:'74%'}}
            whileInView={{left: '68%'}}
            transition={transition}

            style={{top: '-1rem',left:'68%' }}
            className='floating-div'
            >
              <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
            </motion.div>
          
            <motion.div
             initial={{top: '23rem', left:'9rem'}}
             whileInView={{left: '0rem'}}
             transition={transition}

             style={{top:'23rem', left:'0rem' }}
             className='floating-div'
             >
              <FloatingDiv image={thumbup} txt1='Mathematics' txt2='Enthusiast' />
            </motion.div>
            <div className="blur" style ={{background : "rgba(238 210 255"}}></div>
            <div className='blur'
              style={{
                background: '#C1F5FF',
                top:'17rem',
                width: '21rem',
                height: '11rem',
                left: '-9rem'
              }}
           > </div>
         </div>     
    </div>
  )
}

export default Intro

