import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/LiamShalom" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/liam-shalom-437945270/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="mailto:lsdw.shalom@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://github.com/LiamShalom/LiamShalom/blob/main/Liam%20Shalom.pdf" target="_blank" rel="noreferrer"><DescriptionIcon/></a>
      </div>
    </footer>
  );
}

export default Footer;