import './App.css';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import Home from './Home/Home';

import HomeFast from './Home/HomeFast/HomeFast';


import SoftwareEng from './SoftwareEng/SoftwareEng';
import GameDev from './GameDev/GameDev';
import Songwritter from './Songwritter/Songwritter';

import ComingSoon from './ComingSoon/ComingSoon'

import NotFound from './NotFound/NotFound'

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App-Wrapper">
      <NavBar/>
      <Footer/>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home-fast" element={<HomeFast />} />
        
        <Route path="/software-eng" element={<SoftwareEng />} />
        <Route path="/game-dev" element={<GameDev />} />
        <Route path="/songwritter" element={<Songwritter />} />

        <Route path="/coming-soon" element={<ComingSoon />} />
        
        {/* Catch-all route for 404 pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
