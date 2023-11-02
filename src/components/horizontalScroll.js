import React, { useState, useEffect, useRef } from "react";

const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    console.log(ref.current.offsetTop)
    setTranslateX(offsetTop);
  });
};


const HorizontalScroll = ({children}) => {

  const [dynamicHeight, setDynamicHeight] = useState(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);



  return (
    <div className={`relative w-full`} style={{height: `${dynamicHeight}px`}}>
      <div className="sticky h-screen top-0 w-full overflow-x-hidden" ref={containerRef}>
        <div className={`absolute h-full will-change-transform`} style={{transform: `translateX(${translateX}px)`}} ref={objectRef}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default HorizontalScroll