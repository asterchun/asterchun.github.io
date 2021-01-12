import { React, useState } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import { ProjectEntry } from "."



export function ProjectsPage() {
    
    const [showAll, setShowAll] = useState(true);
    const [showPython, setShowPython] = useState(false);
    const [showJava, setShowJava] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showGo, setShowGo] = useState(false);
    const [showPersonal, setShowPersonal] = useState(false);
    const [showSchool, setShowSchool] = useState(false);
    const [showKotlin, setShowKotlin] = useState(false);
    const [showWeb, setShowWeb] = useState(false);
    const [showApp, setShowApp] = useState(false);

    const test = {
        name: "hello",
        date: "november",
        info: "this is a test"
    };
    
    const test2 = {
        name: "hello",
        date: "november",
        info: "this is a test2"
    };

    return (
        <div className="project-page">
            <div className="project-content">
                <div className="project-header">
                    Projects
                </div>
                <div className="project-filters">
                    Filter by:
                        <button>Personal Projects</button>
                        <button>Course Projects</button>
                        <button>Languages</button>
                        <button>Fields</button>
                </div>
                <div className="projects">
                    <ProjectEntry {...test}/>
                    <ProjectEntry {...test2}/>
                </div>
            </div>
            <Particles 
                className="particles-project"
                params={particlesConfig}
            />
    
        </div>
    );;
}