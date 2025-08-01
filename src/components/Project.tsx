import React from "react";
import mock1 from '../assets/images/sentra-chatbot-mock.png';
import mock2 from '../assets/images/chess-app-mock.png'
import mock3 from '../assets/images/muscle-map-mock.png';
import mock4 from '../assets/images/tke-website-mock.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://sentra-4114a.web.app" target="_blank" rel="noreferrer"><img src={mock1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://sentra-4114a.web.app" target="_blank" rel="noreferrer"><h2>Sentra Chatbot</h2></a>
                <p>With a group of students designed a full-stack AI roleplay chat platform with persistent character memory, chat history, and friend-based shared context </p>
            </div>
            <div className="project">
                <a href="https://tke-website-one.vercel.app/" target="_blank" rel="noreferrer"><img src={mock4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://tke-website-one.vercel.app/" target="_blank" rel="noreferrer"><h2>TKE Website</h2></a>
                <p>Built a website to assist in recruiting and showcasing my fraternity Tau Kappa Epsilon to potential members, students, and parents</p>
            </div>
            <div className="project">
                <a href="https://chess-app-lemon.vercel.app" target="_blank" rel="noreferrer"><img src={mock2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://chess-app-lemon.vercel.app" target="_blank" rel="noreferrer"><h2>2-Player Chess</h2></a>
                <p>Developed a two-player chess game in with an intuitive user interface, accurate game logic, and move history with move navigation </p>
            </div>
            <div className="project">
                <a href="https://muscle-map-yran.onrender.com" target="_blank" rel="noreferrer"><img src={mock3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://muscle-map-yran.onrender.com" target="_blank" rel="noreferrer"><h2>Muscle Map</h2></a>
                <p>Developed a full-stack web application for visualizing muscle activation based on user workout inputs </p>
            </div>
        </div>
    </div>
    );
}

export default Project;