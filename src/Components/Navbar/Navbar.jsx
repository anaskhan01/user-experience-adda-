import React, { useState } from 'react'
import logo from "../Navbar/uxadda.svg";
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import Searchfield from '../Search/Searchfield';

const Navbar = () => {
  const navigation = useNavigate();
  const [headerVisible, setHeaderVisible] = useState(true);

  return (
    <>
      <header style={{ display: headerVisible ? 'block' : 'none' }}>
        <div className="container">
          <div className="mainHeader">
            <div className="logo" onClick={() => navigation('/')}>
              <img src={logo} alt="uxaddalogo" />
              <p>We simplify user experience</p>
            </div>
            <nav>
              <ul className='menu'>
                <li><Link to="/">HOME <MdKeyboardArrowDown style={{ marginBottom: "-5px" }} /></Link></li>
                <li><Link to="/design">DESIGN <MdKeyboardArrowDown /></Link>
                  <ul className="subMenu">
                    <li><Link to="/uxdesign">UX DESIGN</Link></li>
                    <li><Link to="/uidesign">UI DESIGN</Link></li>
                    <li><Link to="/responsivedesign">RESPONSIVE DESIGN</Link></li>
                    <li><Link to="/tools">TOOLS <FaAngleRight /></Link>
                      <ul className="subMenu subMenu-lvl2">
                        <li><Link to="/figma">FIGMA</Link></li>
                        <li><Link to="/adobexd">ADOBE XD</Link></li>
                        <li><Link to="/adobephotoshop">ADOBE PHOTOSHOP</Link></li>
                        <li><Link to="/adobeillustratore">ADOBE ILLUSTRATOR</Link></li>
                        <li><Link to="/adobeindesign">ADOBE INDESIGN</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link to="/development">DEVELOPMENT <MdKeyboardArrowDown style={{ marginBottom: "-5px" }} /></Link>
                  <ul className="subMenu">
                    <li><Link to="/html">HTML</Link></li>
                    <li><Link to="/css">CSS</Link></li>
                    <li><Link to="/bootstrap">BOOTSTRAP</Link></li>
                    <li><Link to="/flutter">FLUTTER</Link></li>
                    <li><Link to="/jquery">JQUERY</Link></li>
                    <li><Link to="/javascript">JAVASCRIPT</Link></li>
                    <li><Link to="/reacttyperscript">REACT TYPESCRIPT</Link></li>
                    <li><Link to="/reactjs">REACT JS</Link></li>
                    <li ><Link to="/tools">TOOLS</Link></li>
                  </ul>
                </li>
                <li><Link to="/app">APP <MdKeyboardArrowDown style={{ marginBottom: "-5px" }} /></Link>
                  <ul className="subMenu">
                    <li><Link to="/ios">IOS</Link></li>
                    <li><Link to="/android">ANDROID</Link></li>
                  </ul>
                </li>
                <li><Link to="/tutorials">TUTORIALS <MdKeyboardArrowDown style={{ marginBottom: "-5px" }} /></Link>
                  <ul className="subMenu">
                    <li><Link to="/htmltutorials">HTML TUTORIALS</Link></li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="searchIcon" onClick={() => setHeaderVisible(false)}>
              <IoSearch size={20} color="#A435F0" />
            </div>
          </div>
        </div>
      </header>
      <Searchfield show={!headerVisible} onClose={() => setHeaderVisible(true)} />
    </>
  )
}

export default Navbar
