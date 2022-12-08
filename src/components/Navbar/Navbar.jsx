import React from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
const Navbar= ()=> {
  return (
    <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Snigdha</div>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                  <li>
                <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                    Home
                      </Link>
                    </li>
                    <li>
                    <Link to="about" spy={true} smooth={true}>
                    Profile
                    </Link>
                    </li>
                    <li>
                    <Link to="work" spy={true} smooth={true}>
                  About
                  </Link>
                    </li>
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
            <button className ="button n-button">
                Contact me
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
