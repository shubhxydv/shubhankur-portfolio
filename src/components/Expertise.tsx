import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faRocketchat } from '@fortawesome/free-brands-svg-icons'; 
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
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
   "Python",
"NumPy",
"Pandas",
"Matplotlib",
"Scikit-learn",
"Python Flask",
"HTML",
"CSS",
"Javascript"
];

const labelsThird = [
  "React JS", "Firebase", "Firestore", "Firebase Authentication", "Firebase Storage", "React Toastify", "CSS", "JavaScript", "HTML",
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
                    <p>I created a portfolio web page using HTML, CSS, JavaScript, React, and JSON to showcase my skills, projects, 
                        and achievements in web development. This platform highlights my expertise in building dynamic, responsive,
                         and user-friendly interfaces. By leveraging modern web technologies, I demonstrated my ability to create visually
                          appealing and interactive applications while ensuring functionality across different devices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Technologies Used:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faChartLine} size="3x"/>
                    <h3><a href="https://github.com/shubhxydv/Banglore_Price_Prediction_ML_Project.git" target="_blank" rel="noopener noreferrer">Price Prediction Model (ML) </a></h3>

                    <p>I developed a machine learning model to predict property prices in Bengaluru's real estate market.  
                        Using Python, Flask, and Scikit-learn, it analyzes factors like location, size, and amenities  
                        to deliver accurate predictions. The project includes a web interface built with HTML, CSS, and JavaScript,  
                        demonstrating my ability to integrate machine learning with user-friendly applications.  </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                <FontAwesomeIcon icon={faRocketchat} size="3x"/>
                    <h3><a href="https://github.com/shubhxydv/ACM-SRM-Society-Chatting-Platform.git" target="_blank" rel="noopener noreferrer">Chating Platform (Full Stack)</a></h3>
                    <p>"Web Chatting platform for the ACM SRM Society.
                         Features include individual and group chats, customizable permissions and roles, and the ability to send images 
                         and videos. Users can create and edit their profiles, including profile pictures, names, descriptions, domains,
                          and titles. The platform also offers a dedicated space to display leads, heads of domains, and upcoming events,
                           fostering better engagement and interaction within the community."</p>
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