import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import avatar from '../assets/images/avatar.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/LiamShalom" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/liam-shalom-437945270/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:lsdw.shalom@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://github.com/LiamShalom/LiamShalom/blob/main/Liam%20Shalom.pdf" target="_blank" rel="noreferrer"><DescriptionIcon/></a>
          </div>
          <h1>Liam Shalom</h1>
          <p>Student @ University of Washington</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/LiamShalom" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/liam-shalom-437945270/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;