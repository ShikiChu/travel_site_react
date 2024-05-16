import React, {useState,useEffect} from 'react'
import './home.css'
import video from '../../Assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { TbApps } from "react-icons/tb";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  // visual effect for fade-up, find more in https://michalsnik.github.io/aos/
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  
  const [price, setPrice] = useState(300);

  const handleInputChange = (event) => {
    setPrice(event.target.value);
  }
  
    return (
      <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type='video/mp4' ></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span data-aos="fade-up" className="smallText">
              Our Packages
            </span>
            <h1 data-aos="fade-up" className="homeTitle">
              Search your Trip
            </h1>
          </div>
          <div data-aos="fade-up"  className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city">Search your destination</label>
              <div className="input flex">
                <input type="text" placeholder='Japan' />
                <GrLocation  className='icon'/>
              </div>

            </div>
            <div className="dateInput">
              <label htmlFor="date">Select Date</label>
              <div className="input flex">
                <input type="date" />
              </div>

            </div>
            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price</label>
                <h3 className="total">${price}</h3>
              </div>
              <div className="input flex">
                <input id="priceRange" type="range" 
                max="8000" min="100" value={price} onChange={handleInputChange}/>
              </div>
            </div>

            <div className="searchOptions flex">
            <FaSearch className='icon'/>
            <span>Search</span>
            </div>
          </div>

          <div className="homeFooterIcons flex">
            <div className="rightIcons">
                <FiFacebook className="icon" />
                <FaInstagramSquare className="icon" />
                <FaXTwitter className="icon" />
            </div>
            <div className="leftIcons">
              <FaListUl className="icon" />
              <TbApps className="icon" />
            </div>
          </div>
        </div>
      </section>
    )
  
}

export default Home