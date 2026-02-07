import './App.css';

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';

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

      <Routes>
        <Route index element={<Home />} />
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
