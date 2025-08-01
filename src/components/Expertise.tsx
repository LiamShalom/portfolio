import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Java",
    "C#",
    "SQL",
    "PostgreSQL"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Azure",
    "Linux",
    "Windows",
    "Selenium",
];

const labelsThird = [
    "Python",
    "Pytorch",
    "NumPy",
    "Sci-kit"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies
                         such as React and SpringBoot. I have a strong proficiency in the SDLC process as well as frontend
                          and backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Automation & Scripting</h3>
                    <p>I have experience automating system workflows and repetitive tasks using open-source
                         scripting solutions. My work has saved significant manual hours and strengthened my
                          ability to identify process bottlenecks and streamline backend operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Science & Research</h3>
                    <p>Through coursework and lab research, I’ve applied machine learning, data visualization,
                         and statistical techniques to real-world problems. I’m comfortable working with
                          structured data and conducting technical investigations to inform design and system
                           improvements.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;