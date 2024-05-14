import React from 'react';
import Project from './Project';
import HungieBois from '../images/Hungie-Bois.png';
import WeatherDashboard from '../images/Weather-Dashboard.png';
import Scheduler from '../images/Scheduler.png';
import jate from '../images/JATE.png';
import Whisper from '../images/Whisper.png';
import TechBlog from '../images/Tech-Blog.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Portfolio.css';

// Portfolio
function Portfolio() {
    return (
        // Container
        <div className="portfolio-wrapper">
            <h1 className="portfolio-title">Portfolio</h1>
            <div className="container">
                <div className="row">
                    {[
                        {
                            title: "Hungie-Bois",
                            description: "Find food near you!",
                            imgSrc: HungieBois,
                            deployedLink: "https://jenryhenry.github.io/Hungie-Bois/",
                            githubLink: "https://github.com/JenryHenry/Hungie-Bois/",
                        },
                        {
                            title: "JATE",
                            description: "A text editor that is usable offline!",
                            imgSrc: jate,
                            deployedLink: "https://joshs-pwa-text-editor.onrender.com/",
                            githubLink: "https://github.com/Sulxy/Joshs-PWA-Text-Editor",
                        },
                        {
                            title: "Weather Dashboard",
                            description: "Check the weather in any city!",
                            imgSrc: WeatherDashboard,
                            deployedLink: "https://sulxy.github.io/Joshs-Weather-Dashboard/",
                            githubLink: "https://github.com/Sulxy/Joshs-Weather-Dashboard/",
                        },
                        {
                            title: "Scheduler",
                            description: "A simple workday scheduler!",
                            imgSrc: Scheduler,
                            deployedLink: "https://sulxy.github.io/Joshs-Scheduler/",
                            githubLink: "https://github.com/Sulxy/Joshs-Scheduler",
                        },
                        {
                            title: "Whisper",
                            description: "Please wait while this project loads! (~1minute)",
                            imgSrc: Whisper,
                            deployedLink: "https://whisper-o7m0.onrender.com/",
                            githubLink: "https://github.com/Sulxy/Whisper",
                        },
                        {
                            title: "Tech Blog",
                            description: "A simple tech blog!",
                            imgSrc: TechBlog,
                            deployedLink: "https://joshs-mvc-techblog-87421b6af7de.herokuapp.com/",
                            githubLink: "https://github.com/Sulxy/Joshs-MVC-Tech-Blog",
                        },
                        ].map((project, index) => (
                        <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
                            <Project title={project.title} description={project.description} imgSrc={project.imgSrc} deployedLink={project.deployedLink} githubLink={project.githubLink}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;