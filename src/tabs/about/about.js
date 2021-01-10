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
                            <li>
                                <a href="https://inst.eecs.berkeley.edu/~cs61a/sp19/" className="course-websites">
                                Structure and Interpretation of Computer Programs
                                </a>
                            </li>
                            <li>
                                <a href="https://inst.eecs.berkeley.edu/~cs61b/fa19/" className="course-websites">
                                Data Structures
                                </a>
                            </li>
                            <li>
                                <a href="https://cs61c.org/sp20/" className="course-websites">
                                Machine Structures
                                </a>
                            </li>
                            <li>Designing Information Devices and Systems</li>
                            <li>
                                <a href="https://su20.cs161.org/" className="course-websites">
                                Computer Security
                                </a>
                            </li>
                            <li>
                                <a href="https://inst.eecs.berkeley.edu/~cs188/fa20/" className="course-websites">
                                Introduction to Artificial Intelligence
                                </a>    
                            </li>
                            <li>
                                <a href="https://inst.eecs.berkeley.edu/~cs164/fa20/" className="course-websites">
                                Compilers
                                </a>
                            </li>
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

