import React, {useState} from 'react'
import './navbar.css'
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { GiWitchFlight } from "react-icons/gi";

const Navbar = () => {
const[active, setActive] = useState('navBar')
// toggle navBar
const showNav = () =>{
  setActive('navBar activeaNavbar')
}
const hideNav = () =>{
  setActive('navBar')
}
  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="" className="logo flex">
            <h1><GiWitchFlight className="icon"/>BestTrip</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItem">
                <a href="#" className="navLink">News</a>
            </li>
            <li className="navItem">
                <a href="#" className="navLink">Contact</a>
            </li>
            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>
          <div className="closeNavbar" onClick={hideNav}>
            <IoIosCloseCircle  className="icon"/>
          </div>

          
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>

      </header>
    </section>
  )
}

export default Navbar
