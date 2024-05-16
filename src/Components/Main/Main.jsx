import React,{useEffect}from 'react'
import './main.css'
import { GrLocation } from "react-icons/gr";
import { CgDetailsMore } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import Aos from 'aos'
import 'aos/dist/aos.css'


// Data is normally fetched from API get reqeust or database, 
//but for this demo, i just paste the state data here.

// also for the images
import img1 from '../../Assets/travel1.jpg'
import img2 from '../../Assets/travel2.jpg'
import img3 from '../../Assets/travel3.jpg'
import img4 from '../../Assets/travel4.jpg'
import img5 from '../../Assets/travel5.jpg'
import img6 from '../../Assets/travel6.jpg'
import img7 from '../../Assets/travel7.jpg'
import img8 from '../../Assets/travel8.jpg'
import img9 from '../../Assets/travel9.jpg'

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: 'Eiffel Tower',
    location: 'Paris, France',
    grade: 'RELAX',
    fees: '$2000',
    description: 'The Eiffel Tower is one of the most recognizable structures in the world and a must-see when visiting Paris.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Japanses Castles',
    location: 'Tokyo, Japan',
    grade: 'TRADITIONAL',
    fees: '$5000',
    description: 'Tokyo is the capital city of Japan and one of the most populous cities in the world.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Statue of Liberty',
    location: 'New York, USA',
    grade: 'AMAZING',
    fees: '$300',
    description: 'The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Colosseum',
    location: 'Rome, Italy',
    grade: 'HISTRORIC',
    fees: '$2500',
    description: 'The Colosseum is an ancient amphitheater in the center of the city of Rome, Italy.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Taj Mahal',
    location: 'Agra, India',
    grade: 'HISTRORIC',
    fees: '$1500',
    description: 'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in Agra, India.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Machu Picchu',
    location: 'Cusco Region, Peru',
    grade: 'HISTRORIC',
    fees: '$4500',
    description: 'Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru.'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Sydney Opera House',
    location: 'Sydney, Australia',
    grade: 'AMAZING',
    fees: '$3500',
    description: 'The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Christ the Redeemer',
    location: 'Rio de Janeiro, Brazil',
    grade: 'RELAX',
    fees: '$2000',
    description: 'Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Niagara Falls',
    location: 'Ontario, Canada / New York, USA',
    grade: 'AMAZING',
    fees: '$100',
    description: 'Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the state of New York in the United States.'
  }
];

const Main = () => {
  // visual effect for fade-up, find more in https://michalsnik.github.io/aos/
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Popular Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
        return (
          <div key={id} data-aos="fade-up" className="EachDest">
            <img src={imgSrc} alt={destTitle} className='imageDiv'/>

            <div className="cardInfo">
              <h4 className='destTitle' >{destTitle}</h4>
              <span className="continent flex">
                <GrLocation  className='icon'/>
                <span className="location">{location}</span>
              </span>
              
              <div className="fees flex">
                <div className="grade">
                  <span>{grade} <small><FcLike /></small> </span>
                  
                </div>
                <div className="price">
                  <h5>{fees}</h5>
                </div>
              </div>

              <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  MORE <CgDetailsMore className='icon'/>
                </button>
            </div>
          </div>
        );
      })}
      </div>
    </section>
  )
}

export default Main