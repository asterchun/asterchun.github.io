import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

export function ProjectsAndExperiencePage() {
    return (
        <div className="project-page">
            <Particles 
                id="particles"
                params={particlesConfig}
            />
    
        </div>
    );;
}