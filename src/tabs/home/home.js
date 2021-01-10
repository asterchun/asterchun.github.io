import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import profilePic from "../../images/profilePic.png";
import linkedin from "../../images/linkedinLogo.png";
import github from "../../images/githubLogo.png";
import resume from "../../images/resumeLogo.png";


export function HomePage() {
    return (
        <div>
            <div className="home-content">
                <div className="home-header">Hello World!</div>
                <div className="picture-wrapper">
                    <div className="home-content-wrapper">
                        <div className="home-body">My name is Aster Chun and I am currently a junior at UC Berkeley double majoring in Computer Science and Applied Mathematics. I am passionate about software development and I'm always looking for opportunities to learn and grow as a software engineer. I am interested in projects involving applications of software development and programming. If you are interested in working together, please feel free to <a href="mailto:asterchun@berkeley.edu" className="email-link">contact me</a> at: <a href="mailto:asterchun@berkeley.edu" className="email-link">asterchun@berkeley.edu</a>!
                        </div>
                        <br></br>
                        <div className="links">
                            <a href="https://github.com/asterchun">
                                <img src={github} alt="Github" className="github-logo"></img>
                            </a>
                            <a href="https://linkedin.com/in/aster-chun/">
                                <img src={linkedin} alt="LinkedIn" className="linkedin-logo"></img>
                            </a>
                            <a href="documents/resume.pdf" target="_blank">
                                <img src={resume} alt="Resume" className="resume-logo"></img>
                            </a>
                        </div>
                    </div>
                    <img src={profilePic}alt="profile" className="profile-pic"></img>
                </div>
                
            </div>
            <Particles 
                    className="particles-home"
                    params={particlesConfig}
            />
            
        </div>
    );
}
  
