import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

export function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-content">
                Work in progress!
            </div>
            <Particles 
                id="particles-about"
                params={particlesConfig}
            />
    
        </div>
    );
}

