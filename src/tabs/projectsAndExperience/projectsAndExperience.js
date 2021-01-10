import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

export function ProjectsPage() {
    return (
        <div className="project-page">
            <div className="project-content">
                <div className="project-header">
                    Projects
                </div>
            </div>
            <Particles 
                className="particles-project"
                params={particlesConfig}
            />
    
        </div>
    );;
}