import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import profilePic from "../../images/profilePic.png";

export function HomePage() {
    return (
        <div className="home-page">
            <div className="home-content">
                <div className="home-header">Hello!</div>
                <div className="picture-wrapper">
                    <div className="home-body">My name is Aster Chun and I am currently a junior at UC Berkeley double majoring in Computer Science and Applied Mathematics. If you are interested in working together, please feel free to contact me!
                    </div>
                    <img src={profilePic} alt="profile" className="profile-pic"></img>
                </div>
                <div className="contact-links"></div>
            </div>
            <Particles 
                    className="particles-home"
                    params={particlesConfig}
            />
            
        </div>
    );
}
  
