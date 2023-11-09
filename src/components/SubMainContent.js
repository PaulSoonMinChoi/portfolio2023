import React, { useEffect } from 'react';
import '../css/image-carosel.css'

// Assets
import pic1 from '../public/carosel-images/twitchrivalsproject.jpeg'
import pic2 from '../public/carosel-images/mtndewproject.png'
import pic3 from '../public/carosel-images/mediaonetestproject.png'
import pic4 from '../public/carosel-images/saproject.png'
import pic5 from '../public/carosel-images/waveformproject.webp'
import pic6 from '../public/carosel-images/unsplash6.avif'
import pic7 from '../public/carosel-images/unsplash7.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


// Import our Components
import HorizontalScroll from './horizontalScroll'


const SubMainContent = () => {

  const imgObj = {
    1: pic1,
    2: pic2,
    3: pic3,
    4: pic4,
    5: pic5,
    6: pic6,
    7: pic7,
  }

  const SampleCards = React.memo(() =>
  Array(7)
    .fill(0)
    .map((_e, i) => 
      <div key={`sampleCard-${i}`} className='project-card relative h-[300px] w-[500px] mr-[70px] shrink-0	bg-slate-500'>
        <img className="projects" alt='test' src={imgObj[i + 1]} draggable="false" />
        
      </div>
    )
);

const waviyStyles = {
  1: {
    '--i': 1,
    animationDelay: `calc(.1s * var(--i))`,
  },
  2: {
    '--i': 2,
    animationDelay: `calc(.1s * var(--i))`,
  },
  3: {
    '--i':3,
    animationDelay: `calc(.1s * var(--i))`,
  },
  4: {
    '--i': 4,
    animationDelay: `calc(.1s * var(--i))`,
  },
  5: {
    '--i': 5,
    animationDelay: `calc(.1s * var(--i))`,
  },
  6: {
    '--i': 6,
    animationDelay: `calc(.1s * var(--i))`,
  },
  7: {
    '--i': 7,
    animationDelay: `calc(.1s * var(--i))`,
  },
  8: {
    '--i': 8,
    animationDelay: `calc(.1s * var(--i))`,
  },
}



  return (
    <div>
      {/* MAKE THIS ANOTHER COMPONENT 1*/}
      <section className='flex px-[200px] py-[128px]'>
        <div className="waviy">
          <span style={waviyStyles[1]}>W</span>
          <span style={waviyStyles[2]}>E</span>
          <span style={waviyStyles[3]}>L</span>
          <span style={waviyStyles[4]}>C</span>
          <span style={waviyStyles[5]}>O</span>
          <span style={waviyStyles[6]}>M</span>
          <span style={waviyStyles[7]}>E</span>
          <span style={waviyStyles[8]}>.</span>
        </div>

      
        <ul className='icon-list'>
          <li>
            <a href="mailto:paulsoonminchoi@gmail.com?subject=Mail from Portfolio Website">
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/paulsoonminchoi/">
              <FontAwesomeIcon className='icon' icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/PaulSoonMinChoi">
              <FontAwesomeIcon className='icon' icon={faGithub} />
            </a>
          </li>
        </ul>
        
      </section>

      <section className='flex flex-col px-[400px]'>
      <div className='flex flex-col'>
          <span className='info-text text-base leading-6'>
            My name is Paul Choi, I'm a software engineer / freelancer based in Orange County / Los Angeles, CA, US. 
            I have developed and worked on many applications in the Esports / Broadcasting solutions platforms.
          </span>
          <span className='info-text text-base leading-6'>
            I'm passionate about intrinsic, cutting-edge interfaces that enhances the user's experience.
          </span>
        </div>
        <div>
          <div className="container flex justify-end">
            <p className="navigation">About</p>
          </div>
          <div className="container flex justify-end">
            <p className="navigation">Contact</p>
          </div>
          <div className="container flex justify-end">
            <p className="navigation">FAQ</p>
          </div>
          <div className="container flex justify-end">
            <p className="navigation">BloodBath</p>
          </div>

      
        </div>
       
      </section>

      {/* MAKE THIS ANOTHER COMPONENT 2*/}
      <section className='relative w-full min-h-screen'>
        
        <HorizontalScroll >
          <div className='relative h-full pl-[150px] flex justify-start	items-center'>
            {/* <div className='relative h-[300px] w-[500px] mr-[70px] shrink-0	'>
            </div> */}
            <SampleCards />
          </div>
        </HorizontalScroll>
      </section>

    </div>
  )
}

export default SubMainContent