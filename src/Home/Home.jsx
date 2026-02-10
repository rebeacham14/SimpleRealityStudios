import './Home.css';

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


function Home() {

  // logic for pic appear on button hover
  // const [is1Shown, setIs1Shown] = useState(false);
  // const [is2Shown, setIs2Shown] = useState(false);
  // const [is3Shown, setIs3Shown] = useState(false);

  // const handleMouseEnter1 = () => {
  //   setIs1Shown(true);
  // };
  // const handleMouseEnter2 = () => {
  //   setIs2Shown(true);
  // };
  // const handleMouseEnter3 = () => {
  //   setIs3Shown(true);
  // };

  // const handleMouseLeave1 = () => {
  //   setIs1Shown(false);
  // };
  // const handleMouseLeave2 = () => {
  //   setIs2Shown(false);
  // };
  // const handleMouseLeave3 = () => {
  //   setIs3Shown(false);
  // };




  // logic for name+buttons fade in and out
  const [showName, setShowName] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Fade in after 0.2s
    const nameFadeInTimer = setTimeout(() => setShowName(true), 200);

    // Fade out after 3.5s
    const nameFadeOutTimer = setTimeout(() => setShowName(false), 2000);

    // Fade in after 4s
    const buttonsFadeInTimer = setTimeout(() => setShowButtons(true), 2800);


    return () => {
      clearTimeout(nameFadeInTimer);
      clearTimeout(nameFadeOutTimer);
      clearTimeout(buttonsFadeInTimer);
    };
  }, []);



  return (
    <div className="Home-Wrapper">
      <div className='Home-Content'>


        <div className={showName ? 'Name-Banner' : 'Name-Banner-Fade-Out'}>
            <div>
                Ryan Beacham
            </div>
        </div> 

        
        <div className='Home-Images-Container'>
          {/* <img className={is1Shown ? 'Img-1-Show' : 'Img-1-Hide'} src='src/Home/Images/Home_Img_1.PNG' alt="Description of the image"></img>
          <img className={is2Shown ? 'Img-2-Show' : 'Img-2-Hide'} src='src/Home/Images/Home_Img_2.PNG' alt="Description of the image"></img>
          <img className={is3Shown ? 'Img-3-Show' : 'Img-3-Hide'} src='src/Home/Images/Home_Img_3.PNG' alt="Description of the image"></img>  */}
        </div>

        <div className={showButtons ? 'Home-Buttons-Container-Show' : 'Home-Buttons-Container-Hide'}>
          {/* <Link to="/software-eng"><button onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}> Software Engineer</button></Link>
          <Link to="/coming-soon"><button onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}> Game Developer </button></Link>
          <Link to="/coming-soon"><button onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}> Songwritter </button></Link> */}
        
          <Link to="/software-eng"><button > Software Engineer</button></Link>
          <Link to="/coming-soon"><button > Game Developer </button></Link>
          <Link to="/coming-soon"><button > Songwritter </button></Link>
        </div>

        
      </div>
    </div>

  );

}

export default Home;
