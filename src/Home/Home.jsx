import './Home.css';

import softwarePic from './Images/Home_Img_1.PNG';
import gameDevPic from './Images/Home_Img_2.PNG';
import songwritterPic from './Images/Home_Img_3.PNG';

import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';


function Home() {

  // 1. Define your image paths
  const images = {
    // default: 'src/Home/Images/Home_Img_1.PNG',
    // software: 'src/Home/Images/Home_Img_1.PNG',
    // gameDev: 'src/Home/Images/Home_Img_2.PNG',
    // songwritter: 'src/Home/Images/Home_Img_3.PNG'
    default: softwarePic,
    software: softwarePic,
    gameDev: gameDevPic,
    songwritter: songwritterPic
  };

  
  
  const [currentPic, setCurrentPic] = useState(images.default);
  
  const [isLoading, setIsLoading] = useState(true); // Control visibility

  const [ isMainContentLoaded, setisMainContentLoaded] = useState(false);

  useEffect(() => {

    // hide load screen after 14s
    const loaderTimer = setTimeout(() => setIsLoading(false), 14000);

    const mainContentFadeTimer = setTimeout(() => setisMainContentLoaded(true), 14000);

    return () => {
      // load screen
      clearTimeout(loaderTimer);

      // load content fade-in
      clearTimeout(mainContentFadeTimer);
    };
  }, []);


  return (
    <>
      {isLoading && (
        <div id="loader">
          <div className="rising-text"><span className='SRSspan'>SIMPLE REALITY STUDIOS</span></div>
          <div className="presents-text">presents...</div>
          <div className="ryan-text">Ryan Beacham</div>
        </div>
      )}

      <div className="Home-Wrapper">
        <div className='home-section-container'>
          <div className='section-pic'>
            <img className={isMainContentLoaded ? 'Img-1-show' : 'Img-1-hide'} src={currentPic} alt="Section Preview" />
          </div>

          <div className='section-selection'>
            <div className={isMainContentLoaded ? 'Home-Buttons-Container-Show' : 'Home-Buttons-Container-Hide'}>
              <Link to="/software-eng">
                <button 
                  onMouseEnter={() => setCurrentPic(images.software)} 
                > Software Engineer</button>
              </Link>
              
              <Link to="/coming-soon">
                <button 
                  onMouseEnter={() => setCurrentPic(images.gameDev)} 
                > Game Developer </button>
              </Link>
              
              <Link to="/coming-soon">
                <button 
                  onMouseEnter={() => setCurrentPic(images.songwritter)} 
                > Songwritter </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
