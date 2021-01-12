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

    const Sprinkles = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };
    
    const ChocoPy = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const PacMan = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const GhostBusters = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const Classification = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const Gitlet = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const NumC = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const Phispel = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const RiscV = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const DropBox = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const OGQueue = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    const WhatWeEating = {
        name: "hello",
        date: "november",
        language: "Kotlin",
        info: "this is a test"
        imgPath:
    };

    return (
        <div className="project-page">
            <div className="project-content">
                <div className="project-header">
                    Projects
                </div>
                <div className="projects">
                    <ProjectEntry {...Sprinkles} />
                    <ProjectEntry {...OGQueue} />
                    <ProjectEntry {...ChocoPy} />
                    <ProjectEntry {...DropBox} />
                    <ProjectEntry {...WhatWeEating} />
                    <ProjectEntry {...NumC} />
                    <ProjectEntry {...Gitlet} />
                    <ProjectEntry {...Classification} />
                    <ProjectEntry {...GhostBusters} />
                    <ProjectEntry {...PacMan} />
                    <ProjectEntry {...Phispel} />
                    <ProjectEntry {...RiscV} />
                </div>
            </div>
            <div className="project-filters">
                    Filter by:
                        {/* <button>Personal Projects</button>
                        <button>Course Projects</button>
                        <button>Languages</button>
                        <button>Fields</button> */}
            </div>
            <Particles 
                className="particles-project"
                params={particlesConfig}
            />
    
        </div>
    );;
}