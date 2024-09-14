// import React from "react";
// import Technova from '../assets/images/Technova.jpg';
// import isro from '../assets/images/isro.jpg';
// import AICTE from '../assets/images/AICTE.jpg';
// import data_science from '../assets/images/data_science.jpg';

// import '../assets/styles/Project.scss';

// function Project() {
//     return(
//     <div className="projects-container" id="projects">
//         <h1> Achievments</h1>
//         <div className="projects-grid">
//             <div className="project">
//                 <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={AICTE} className="zoom" alt="thumbnail" width="100%"/></a>
//                <h2>AICTE Android Developer Virtual Internship </h2>
//                 <p>Completed a transformative 10-week Android Developer Virtual Internship, supported by Google for Developers (April-June 2024), 
//                     through EduSkills Foundation and AICTE.</p>
//             </div>
//             <div className="project">
//                 <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={isro} className="zoom" alt="thumbnail" width="100%"/></a>
//                 <h2>ISRO Course on AIML Geospatial Data Analysis </h2>
//                 <p> 
//                 Successfully completed an online course on AI and Machine Learning for Geospatial Data Analysis, 
//                 organized by IIRS-ISRO, Dehradun.</p>
//             </div>
//             <div className="project">
//                 <a href="" target="_blank" rel="noreferrer"><img src={Technova} className="zoom" alt="thumbnail" width="100%"/></a>
//                 <h2>Tech Nova Hackathon</h2>
//                 <p>Participated in the TechNova: Igniting Brilliance (Season 1) hackathon, organized by Enterprise System Solution Private Limited, and recognized for hard work and dedication. Selected for Round 2 Grand Masters (ongoing).</p>
//             </div>
//             <div className="project">
//                 <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={data_science} className="zoom" alt="thumbnail" width="100%"/></a>
//            <h2>Altair Data Science Certification</h2>
//                 <p>  
//                 I have successfully passed the Data Engineering Professional Certification examination, 
//                 achieving the Professional level. This certification reflects solid experience in data
//                  access, basic transformations, working with multiple data sets, pivot tables, routines, 
//                  and simple text processing.</p>
//             </div>
            
//         </div>
//     </div>
//     );
// }

// export default Project;



import React from "react";
import Technova from '../assets/images/Technova.jpg';
import isro from '../assets/images/isro.jpg';
import AICTE from '../assets/images/AICTE.jpg';
import data_science from '../assets/images/data_science.jpg';
import '../assets/styles/Project.scss';

interface ProjectDetails {
    href: string;
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
}

const projects: ProjectDetails[] = [
    {
        href: "https://www.filmate.club/",
        imgSrc: AICTE,
        imgAlt: "AICTE Android Developer Virtual Internship thumbnail",
        title: "AICTE Android Developer Virtual Internship",
        description: `Completed a transformative 10-week Android Developer Virtual Internship, 
                      supported by Google for Developers (April-June 2024), through EduSkills Foundation and AICTE.`,
    },
    {
        href: "https://yujisatojr.itch.io/highspeedchase",
        imgSrc: isro,
        imgAlt: "ISRO AIML Geospatial Data Analysis thumbnail",
        title: "ISRO Course on AIML Geospatial Data Analysis",
        description: `Successfully completed an online course on AI and Machine Learning for Geospatial Data Analysis, 
                      organized by IIRS-ISRO, Dehradun.`,
    },
    {
        href: "", // Empty href corrected with no link
        imgSrc: Technova,
        imgAlt: "Tech Nova Hackathon thumbnail",
        title: "Tech Nova Hackathon",
        description: `Participated in TechNova: Igniting Brilliance (Season 1) hackathon, 
                      organized by Enterprise System Solution Private Limited. 
                      Selected for Round 2 Grand Masters (ongoing).`,
    },
    {
        href: "https://www.datumlearn.com/",
        imgSrc: data_science,
        imgAlt: "Altair Data Science Certification thumbnail",
        title: "Altair Data Science Certification",
        description: `Successfully passed the Data Engineering Professional Certification examination, 
                      achieving the Professional level. Demonstrates solid experience in data access, basic 
                      transformations, working with multiple data sets, pivot tables, routines, and text processing.`,
    },
];

const Project: React.FC = () => {
    return (
        <div className="projects-container" id="projects">
            <h1>Achievements</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        {/* Conditional rendering for 'href' */}
                        {project.href ? (
                            <a href={project.href} target="_blank" rel="noreferrer">
                                <img src={project.imgSrc} className="zoom" alt={project.imgAlt} width="100%" />
                            </a>
                        ) : (
                            <img src={project.imgSrc} className="zoom" alt={project.imgAlt} width="100%" />
                        )}
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
