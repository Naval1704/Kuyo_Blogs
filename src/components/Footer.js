import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='logo-section'>
          <h4>Kuyo</h4>
        </div>
        <div className='bottom-content'>
          <div className='footer-links'>
            <Link to='/privacy-policy' className='policy'>Privacy Policy</Link>
            <Link to='/terms' className='terms'>Terms</Link>
            <Link to='/code-of-conduct' className='conduct'>Code of Conduct</Link>
          </div>
          <h4>© 2024 Kuyo</h4>
        </div>
      </div>
    </footer>
  );
}
