import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import profilePic from "../../images/profilePic.png";
import linkedin from "../../images/linkedinLogo.png";
import github from "../../images/githubLogo.png";
import resume from "../../images/resumeLogo.png";


export function HomePage() {
    return (
        <div className="home-page">
            <div className="home-content">
                <div className="home-header">Hello!</div>
                <div className="picture-wrapper">
                    <div className="home-content-wrapper">
                        <div className="home-body">My name is Aster Chun and I am currently a junior at UC Berkeley double majoring in Computer Science and Applied Mathematics. If you are interested in working together, please feel free to <a href="mailto:asterchun@berkeley.edu" className="email-link">contact me</a>!
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
  
