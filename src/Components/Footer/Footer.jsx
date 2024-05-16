import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video2.mp4'
import { HiOutlineBellAlert } from "react-icons/hi2";
import { GiWitchFlight } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  // visual effect for fade-up, find more in https://michalsnik.github.io/aos/
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
      <video src={video2} muted autoPlay loop type='video/mp4' ></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>Keep in touch, subscribe to get more offers</small>
            <h2>Travel with Us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text"  placeholder='abc@email.com'/>
            <button data-aos="fade-up" className="btn flex" type='submit'>
              Subscribe Us <HiOutlineBellAlert className="icon"/>
            </button>
          </div>

        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <GiWitchFlight className='icon'/>BestTrip
              </a>
            </div>
            <div className="footerPara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis tortor et rhoncus suscipit. Pellentesque efficitur, leo in vehicula rhoncus, nisi leo varius metus, in fermentum libero nisi quis urna. Aenean sit amet aliquam velit, varius rhoncus lectus. Aliquam eget urna efficitur, tincidunt dui ac, varius mauris.
            </div>

            <div className="footerSocialMedia">
                <FiFacebook className="icon" />
                <FaInstagramSquare className="icon" />
                <FaXTwitter className="icon" />
            </div>

          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-right" className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>

            <div data-aos="fade-left" className="linkGroup">
              <span className="groupTitle">
                Our Partners
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                CarRentalSuper
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                GOGOFlight
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivagle
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                InsGo
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Demo React UI </small>
            <small>Copyrights Reserved - KenShiki 2024</small>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Footer