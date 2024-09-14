import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import logo from '../assets/images/logo.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={logo} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/shubhxydv" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/shubhankur-yadav-/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>

          <h1>Shubhankur</h1>

          
          <a 
            href="https://drive.google.com/uc?export=download&id=1fNE62fS54Z7YD5fHzMK0SPT18POpmocC" 
            download="Shubhankur_Yadav_Resume.pdf" 
            style={{ textDecoration: 'none' }}
          >
            <Button 
              variant="contained" 
              style={{ backgroundColor: '#7A3E9D', color: 'white' }} 
            >
              Download Resume
            </Button>
          </a>

          <div className="mobile_social_icons">
            <a href="https://github.com/shubhxydv" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/shubhankur-yadav-/" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
