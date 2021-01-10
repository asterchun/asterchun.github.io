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
                            <li>
                                <a href="https://www.eecs16b.org/" className="course-websites">
                                    Designing Information Devices and Systems
                                </a>
                            </li>
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
                <div className="skill-hobby-wrapper">
                    <div className="technical-skills">
                        <div className="technical-header">
                            Technical
                        </div>
                        <div className="technical-content">
                            As an undergraduate who enjoys software development, I have worked on numerous projects both personally and for school courses. As a result, I have completed projects using <span className="technical-highlight">Python, Java, Kotlin, JavaScript, HTML, CSS, C, Go, RISC-V and Snap!</span>. Additionally, I am also comfortable writing code using <span className="technical-highlight">SQL</span> and have used libraries and tools such as <span className="technical-highlight">React, GraphQl, Apollo Client, Numpy, OkHTTP, Flask</span> and much more!
                            <br></br>
                            Some of the current projects I am working on involve app and web devlopment. In the future, I am planning to learn more about iOS development using <span className="technical-highlight">Swift</span> and possibly <span className="technical-highlight">React Native</span>!
                        <br></br>

                        </div>
                    </div>
                    <div className="hobbies">
                        <div className="hobby-header">
                            Hobbies
                        </div>
                        <div className="hobby-content">
                            During my free time, I enjoy exercising. In particular, I enjoy playing badminton, soccer and running. I also enjoy reading and watching videos/TV series. Another activity I enjoy is playing the violin.
                        </div>
                    </div>   
                </div> 
            </div>
            <Particles 
                className="particles-about"
                params={particlesConfig}
            />
    
        </div>
    );
}

