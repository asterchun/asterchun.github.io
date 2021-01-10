import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

export function ProjectsPage() {
    return (
        <div className="project-page">
            <div className="project-content">
                Work in progress!
            </div>
            <Particles 
                className="particles-project"
                params={particlesConfig}
            />
    
        </div>
    );;
}