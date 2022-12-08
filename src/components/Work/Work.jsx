import React from 'react'
import './Work.css'
import amazon from '../../img/amazon.jpeg';
import apple from '../../img/apple.jpeg';
import google from '../../img/google.jpeg';
import netflix from '../../img/netflix.jpeg';
import meta from '../../img/meta.jpeg';
import { motion } from "framer-motion";
const Work = () => {
  return (
    <div className="work" id='Work'>
        < div className="awesome">
        <span>Snigdha's</span>
        <span>About</span>
        <span>I am a disciplined, dedicated and a hard-working individual.
            <br/>
            I want to utilize my skills to the fullest in every field.
           <br/>
           I am an ultimate milestone achiever in GoogleCloudReady Facilitator program 2022.
           <br/>
           I am a Web developer with frontend as well as backend skills.
          <br/>
          I aim to secure a challenging position where I can effectively contribute my skills to gain knowledge.
          <br/>
          I am a Mathematics lover. Understanding and solving problems everyday is what makes my day interesting. 
          <br/>
          I am a Zonal level English creative writing winner.
          <br/>
          Talking about my leadership qualities, I was School house captain and led my house. My house was the winner
          <br/>
          in School sports day event.
        </span>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="w-right">
          <motion.div
           initial={{ rotate: 45 }}
           whileInView={{ rotate: 0 }}
           viewport={{ margin: "-40px" }}
           transition={{ duration: 3.5, type: "spring" }}
           className="w-mainCircle">
            <div className="w-secCircle">
              <img src={amazon} alt=""/>
            </div>
            <div className="w-secCircle">
            <img src={apple} alt=""/>
            </div>
            <div className="w-secCircle">
            <img src={google} alt=""/>
            </div>
            <div className="w-secCircle">
            <img src={meta} alt=""/>
            </div>
            <div className="w-secCircle">
            <img src={netflix} alt=""/>
            </div>
          </motion.div>
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
        </div>
  )
}

export default Work
