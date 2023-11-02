import React, { useEffect } from 'react';
import '../css/image-carosel.css'
import pic1 from '../public/carosel-images/unsplash1.avif'
import pic2 from '../public/carosel-images/unsplash2.avif'
import pic3 from '../public/carosel-images/unsplash3.avif'
import pic4 from '../public/carosel-images/unsplash4.avif'
import pic5 from '../public/carosel-images/unsplash5.avif'
import pic6 from '../public/carosel-images/unsplash6.avif'
import pic7 from '../public/carosel-images/unsplash7.avif'

// Import our Components
import HorizontalScroll from './horizontalScroll'


const SubMainContent = () => {

  // useEffect(() => {

  //   const track = document.getElementById("image-track");

  //   const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
    
  //   const handleOnUp = () => {
  //     track.dataset.mouseDownAt = "0";  
  //     track.dataset.prevPercentage = track.dataset.percentage;
  //   }
    
  //   const handleOnMove = e => {
  //     if(track.dataset.mouseDownAt === "0") return;
      
  //     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
  //           maxDelta = window.innerWidth / 2;
      
  //     const percentage = (mouseDelta / maxDelta) * -100,
  //           nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
  //           nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
      
  //     track.dataset.percentage = nextPercentage;
      
  //     track.animate({
  //       transform: `translate(${nextPercentage}%, -50%)`
  //     }, { duration: 1200, fill: "forwards" });
      
  //     for(const image of track.getElementsByClassName("image")) {
  //       image.animate({
  //         objectPosition: `${100 + nextPercentage}% center`
  //       }, { duration: 1200, fill: "forwards" });
  //     }
  //   }
    
  //   /* -- Had to add extra lines for touch events -- */
    
  //   window.onmousedown = e => handleOnDown(e);
    
  //   window.ontouchstart = e => handleOnDown(e.touches[0]);
    
  //   window.onmouseup = e => handleOnUp(e);
    
  //   window.ontouchend = e => handleOnUp(e.touches[0]);
    
  //   window.onmousemove = e => handleOnMove(e);
    
  //   window.ontouchmove = e => handleOnMove(e.touches[0]);

  // })

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
      <div key={`sampleCard-${i}`} className='relative h-[300px] w-[500px] mr-[70px] shrink-0	bg-slate-500'>
        <img className="projects" alt='test' src={imgObj[i + 1]} draggable="false" />
      </div>
    )
);


  return (
    <div>
      <section className='text-center px-[20px] py-[128px] bg-stone-400'>
        Scroll down to reach the horizontal scroll section
      </section>

      <section className='relative w-full min-h-screen'>
        <HorizontalScroll >
          <div className='relative h-full pl-[150px] flex justify-start	items-center	'>
            {/* <div className='relative h-[300px] w-[500px] mr-[70px] shrink-0	'>
            </div> */}
            <SampleCards />
          </div>
        </HorizontalScroll>
      </section>

      {/* <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
          <img className="image" alt='test' src={pic1} draggable="false" />
          <img className="image" alt='test' src={pic2} draggable="false" />
          <img className="image" alt='test' src={pic3} draggable="false" />
          <img className="image" alt='test' src={pic4} draggable="false" />
          <img className="image" alt='test' src={pic5} draggable="false" />
          <img className="image" alt='test' src={pic6} draggable="false" />
          <img className="image" alt='test' src={pic7} draggable="false" />
      </div> */}

      <section className='text-center px-[20px] py-[128px] bg-stone-400'>
        You have left the horizontal horizontal scroll section
      </section>    
    </div>
  )
}

export default SubMainContent