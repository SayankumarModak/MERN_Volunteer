import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaYoutube ,FaInstagram ,FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div>
        <img src="../../public/assets/logo.png" alt="logo" />
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>New York, USA</li>
          <li> crypto@gmail.com</li>
          <li>0987654321</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <Link to={"/"}> Home</Link>
            <Link to={"/donate"}> Donate Us</Link>
            <Link to={"/about"}> About</Link>
            <Link to={"/contact"}> Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Follow us</h4>
        <ul>
          <li>
            <Link to={'/'}><span><FaTwitter /></span> <span>Twitter</span></Link>
          </li>
          <li>
            <Link to={'/'}><span><FaYoutube/></span> <span>Youtube</span></Link>
          </li>
          <li>
            <Link to={'/'}><span><FaInstagram/></span> <span>Instagram</span></Link>
          </li>
          <li>
            <Link to={'/'}><span><FaLinkedin/></span> <span>LinkedIn</span></Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
