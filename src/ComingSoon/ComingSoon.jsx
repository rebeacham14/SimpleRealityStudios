import './ComingSoon.css';
import { Link } from 'react-router-dom';


function ComingSoon() {
  return (
    <div className="Coming-Soon-Wrapper">
      <div className='Back-Button-Container'>
        <Link to="/home-fast"><button className='Back-Button'>
          &lt;
        </button></Link>
      </div>

      <div className="Coming-Soon-Content-Wrapper">
        <div className="Coming-Soon-Header-Container">
            <div className="Coming-Soon-Header">
                <p>Under Development...</p>
            </div>
        </div>

        <div className="Coming-Soon-Content-Container">
            <div className="Coming-Soon-Content">
                <p>Updated content coming soon!</p>
            </div>
        </div>
        <div className="Coming-Soon-Content-Container">
        
        </div>
      </div>

    </div>
  );
}
export default ComingSoon;
