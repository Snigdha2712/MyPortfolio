import React from 'react'
import './About.css'
import Card from '../Card/Card'
import professional from "../../img/professional.jpeg";
import laptop from "../../img/laptop.jpeg";
import book from "../../img/book.jpeg";

import Resume from "./Snigdharesume.pdf";
const About = () => {
  
  return (
    <div className="about" id='About'>
        <div className="awesome">
        <span>Snigdha's</span>
        <span>Profile</span>
        <span> My main objective is to utilize my skills in creating and implementing innovative as well as progressive ideas. 
          <br/>
          Willing to work as a key member in challenging environments.
          <br/>
          I am currently pursuing B.tech in Computer Science and Engineering from Kamla Nehru Institute of Technology.
          <br/>
          I have done my Intemediate and High School in 2019 and 2017 respectively from St.Joseph's Convent School, Varanasi.
          <br/>
          I was born and brought up in Varanasi,Uttar Pradesh.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        <div className="cards">
            <div style={{top:"-2rem", left: '13rem'}}>
                <Card
                emoji={professional}
                heading={'Developer'}
                detail= {'HTML, CSS, JavaScript, Php, Reactjs'}
                />
            </div>
            <div style= {{top:"8rem", left:"-2rem" }}>
                <Card
                emoji={laptop}
                heading={'Competitive programmer'}
                detail={'Solved 700+ problems on Codechef, Codeforces, Leetcode, GeeksforGeeks'}
                />
            </div>
            <div style={{top:"14rem", left:"13rem"}}>
              <Card
              emoji={book}
              heading={'Mathematics enthusiast'}
              detail={'Able to understand and solve problems and have adaptive reasoning skills'}
              />
            </div>
            <div className="blur s-blur2" style={{background: "pink"}}></div>
        </div>
    </div>
  )
}

export default About
