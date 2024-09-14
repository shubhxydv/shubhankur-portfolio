import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons'; 
import { faCar } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';


const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "React Router",
    "SCSS",
];

const labelsSecond = [
   "JavaScript",
    "HTML5",
    "CSS3",
    "Github"
];

const labelsThird = [
  "JavaScript",
    "HTML5",
    "CSS3",
    "Github"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Projects</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3><a href="your-portfolio-link-here" target="_blank"> Responsive Portfolio Webpage</a></h3>
                    <p>I created a portfolio web page using HTML, CSS, JavaScript, React, and JSON, showcasing
                         my skills and projects. This demonstrates my expertise in building dynamic and 
                         responsive user interfaces with modern web technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies Used:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCar} size="3x"/>
                    <h3><a href="https://github.com/shubhxydv/codsoft_landing_page" target="_blank" rel="noopener noreferrer">Hyundai Verna Landing Page</a></h3>

                    <p>Developed a landing page for the Hyundai Verna using HTML, CSS, and JavaScript, featuring 
                        an engaging design and interactive elements. The project showcases my ability to create 
                        visually appealing and user-friendly web experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3><a href="https://github.com/shubhxydv/codsoft_calculator" target="_blank" rel="noopener noreferrer">Calculator</a></h3>
                    <p>"Developed a highly efficient calculator using CSS, HTML, and JavaScript, delivering precise
                         real-time calculations. Expertise in creating user-friendly interfaces for accurate and
                          advanced mathematical operations."</p>
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