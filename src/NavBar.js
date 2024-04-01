import React from 'react';
import './NavBar.css';


function NavBar() {
  return (
    <div className="navBar" id="nv">
       <nav>
        <i className="bi bi-justify" onClick={() => alert('hello')} id="hamMenu"></i>
        <ul>
          <li><a href='?page=home'>HOME</a></li>
          <li><a href='?page=menu'>MENU</a></li>
          <li><a href='?page=ourstory'>OUR STORY</a></li>
          <li><a href='?page=contactus'>CONTACT US</a></li>
          <li className="socialIcon"><a href="call:111-111-111"><i className="bi bi-telephone-forward"></i></a></li>
          <li className="socialIcon"><a href="instgram.com/example"><i className="bi bi-instagram"></i></a></li>
          <li className="socialIcon"><a href="mailto:example@example.com"><i className="bi bi-envelope-fill"></i></a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
