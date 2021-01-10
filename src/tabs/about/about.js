import { React } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

export function AboutPage() {
    return (
        <div className="about-page">
            <div className="about-content">
                <div className="courses">
                    <div className="courses-header">
                        Courses
                    </div>
                    <div className="courses-content">
                        Here are a list of some of the technical courses that I have taken:
                        <ul className="course-list">
                            <li>Data Structures</li>
                            <li>Machine Structures</li>
                            <li>Designing Information Devices and Systems</li>
                            <li>Computer Security</li>
                            <li>Introduction to Artificial Intelligence</li>
                            <li>Compilers</li>
                        </ul>
                        ...and here are some of the courses that I am planning to take:
                        <ul className="course-list">
                            <li>Efficient Algorithms and Intractable Problems</li>
                            <li>Introduction to Database Systems</li>
                            <li>Operating Systems and Programming</li>
                            <li>Introduction to Machine Learning</li>
                            <li>Designing, Visualizing and Understanding Deep Nerual Networks</li>
                        </ul>
                    </div>
                </div>
                <div className="skill-hobby-wrappy">
                    <div className="technical-skills">
                        <div className="technical-header">
                            Technical
                        </div>
                    </div>
                    <div className="hobbies">
                    <div className="hobby-header">
                            Hobbies
                        </div>
                    </div>   
                </div> 
            </div>
            <Particles 
                id="particles-about"
                params={particlesConfig}
            />
    
        </div>
    );
}

