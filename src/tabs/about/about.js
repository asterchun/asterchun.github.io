import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

export function AboutPage() {
    return (
        <div className="about-page">
            <Particles 
                id="particles"
                params={particlesConfig}
            />
    
        </div>
    );
}

