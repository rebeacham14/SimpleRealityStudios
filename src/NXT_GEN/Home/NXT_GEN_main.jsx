import React, { useState } from 'react';
import './JoinNetwork.css';

const JoinNetwork = () => {
  const [formData, setFormData] = useState({
    role: '',
    experience: '',
    interest: 'full-time',
    remote: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="recruit-container">
      <header className="hero-section">
        <span className="badge">Network Access</span>
        <h1>Build the future with us.</h1>
        <p>Join an elite network of tech talent. Define your search, and we'll handle the rest.</p>
      </header>

      <main className="form-card glass-effect">
        <form className="recruitment-form">
          <div className="input-group">
            <label>Primary Expertise</label>
            <input 
              name="role" 
              placeholder="e.g. Senior Frontend Engineer" 
              onChange={handleChange} 
            />
          </div>

          <div className="bento-grid">
            <div className="bento-item">
              <label>Years of Experience</label>
              <select name="experience" onChange={handleChange}>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6+">6+ years</option>
              </select>
            </div>
            
            <div className="bento-item">
              <label>Desired Commitment</label>
              <div className="radio-group">
                <button type="button" className="active">Full-time</button>
                <button type="button">Contract</button>
              </div>
            </div>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" name="remote" id="remote" defaultChecked />
            <label htmlFor="remote">Open to 100% remote roles</label>
          </div>

          <button type="submit" className="cta-button">
            Apply for Access
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 10H15M15 10L11 6M15 10L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </form>
      </main>
    </div>
  );
};

export default NXT_GEN_form;