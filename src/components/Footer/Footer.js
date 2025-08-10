import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text">Mi<span className="two">2</span>TONICS</h1>
            <p>
              We are the best repair service provider and we have a lot of Electronic accesories for our customers to buy.
            </p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/news">News</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className='social-icons'>
                <Link href="https://www.facebook.com/profile.php?id=100088125702282" target="_blank" rel="noopener noreferrer">
                    <IconButton><FacebookSharpIcon className='icon' /></IconButton>
                </Link>
                <Link href="https://twitter.com/mi2tonics" target="_blank" rel="noopener noreferrer">
                    <IconButton><TwitterIcon className='icon' /></IconButton>
                </Link>
                <Link href="https://www.instagram.com/mi2tonics/" target="_blank" rel="noopener noreferrer">
                    <IconButton><InstagramIcon className='icon' /></IconButton>
                </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Mi2TONICS | Designed by Mi2TONICS
        </div>
      </div>
    </footer>
  );
}

export default Footer;
