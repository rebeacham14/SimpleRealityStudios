import './Home.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {

  const [is1Shown, setIs1Shown] = useState(false);
  const [is2Shown, setIs2Shown] = useState(false);
  const [is3Shown, setIs3Shown] = useState(false);

  const handleMouseEnter1 = () => {
    setIs1Shown(true);
  };
  const handleMouseEnter2 = () => {
    setIs2Shown(true);
  };
  const handleMouseEnter3 = () => {
    setIs3Shown(true);
  };

  const handleMouseLeave1 = () => {
    setIs1Shown(false);
  };
  const handleMouseLeave2 = () => {
    setIs2Shown(false);
  };
  const handleMouseLeave3 = () => {
    setIs3Shown(false);
  };

  return (
    <div className="Home-Wrapper">
      <div className='Home-Content'>
        <div className='Meet-Banner'>
            <div>
                Ryan Beacham
            </div>
        </div>
        
        <div className='Home-Images-Container'>
          <img className={is1Shown ? 'Img-1-Show' : 'Img-1-Hide'} src='src/Home/Images/Home_Img_1.PNG' alt="Description of the image"></img>
          <img className={is2Shown ? 'Img-2-Show' : 'Img-2-Hide'} src='src/Home/Images/Home_Img_2.PNG' alt="Description of the image"></img>
          <img className={is3Shown ? 'Img-3-Show' : 'Img-3-Hide'} src='src/Home/Images/Home_Img_3.PNG' alt="Description of the image"></img> 
        </div>

        <div className='Home-Buttons-Container'>
          <Link to="/software-eng"><button onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}> Software Engineer</button></Link>
          <Link to="/coming-soon"><button onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}> Game Developer </button></Link>
          <Link to="/coming-soon"><button onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}> Songwritter </button></Link>
        </div>
      </div>
    </div>

  );

}

export default Home;
