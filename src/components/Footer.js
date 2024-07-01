import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='logo-section'>
          <h4>🐿️ Kuyo</h4>
          <div className='social-media'>
            <Link to='#' className='social-link'>Instagram</Link>
            <Link to='#' className='social-link'>LinkedIn</Link>
            <Link to='#' className='social-link'>Facebook</Link>
          </div>
        </div>
        <div className='user-sections'>
          <div className='help'>
            <h3>Help</h3>
            <ul>
              <li><Link to='#'>Support</Link></li>
              <li><Link to='#'>FAQs</Link></li>
              <li><Link to='#'>Contact Us</Link></li>
            </ul>
          </div>
          <div className='community'>
            <h3>Community</h3>
            <ul>
              <li><Link to='#'>Events</Link></li>
              <li><Link to='#'>Forums</Link></li>
              <li><Link to='#'>Blog</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bottom-content'>
        <div className='footer-links'>
          <Link to='/privacy-policy' className='policy'>Privacy Policy</Link>
          <Link to='/terms' className='terms'>Terms</Link>
          <Link to='/code-of-conduct' className='conduct'>Code of Conduct</Link>
        </div>
        <h4>© 2024 Kuyo</h4>
      </div>
    </footer>
  );
}
