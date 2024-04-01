import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
           <div className='IntroMsg'>
        <img alt="Garcia Taverns where food meets passion" className="logo" src="https://i.ibb.co/WK9hkx8/Garcia-Tavern-logos-transparent.png" id="introLogo" width="200" height="200" />
      </div>
      <div className='IntroMsg'>
        <h1>Stunning food, Amazing Quality</h1>
        <p>Let us host your next special occasion</p>
        <h2><a href="call:111-111-111" style={{ textDecoration: 'none', color: 'white' }}><i className="bi bi-telephone-forward-fill"></i> <span>Contact US today</span></a></h2>
      </div>
    </div>
  );
}

export default Header;
