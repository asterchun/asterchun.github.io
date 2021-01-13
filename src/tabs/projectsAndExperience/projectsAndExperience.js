import { React, useState } from "react";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";
import { ProjectEntry } from ".";
import sprinkles from "../../images/sprinklesLogo.png";

export function ProjectsPage() {

    const [appliedFilter, setAppliedFilter] = useState("None");

    const Sprinkles = {
        name: "Sprinkles Software Engineering Intern",
        key: 0,
        date: "May 2020 - August 2020",
        language: "Kotlin",
        info: "Sprinkles is a video Q&A app that is available on the App Store. Working with the founder over the summer of 2020, I worked on the Android platform of the App. I designed and built an Android app that first performed user authentication before allowing users to upload videos onto the main iOS App. In this project, I used GraphQl and Apollo Client to communicate with the online database. After authenticating the user with the online database, the backend would generate a link that I made an HTTP PUT request to in order to upload the video.",
        imgPath: "",
        attributes: ["Kotlin", "App", "Personal Projects", "None"]
    };
    
    const ChocoPy = {
        name: "Chocopy Compiler",
        key: 2,
        date: "September 2020 - November 2020",
        language: "Java, jflex, Cup, RISC-V",
        info: "For the compilers course at UC Berkeley, we designed and implemented a fully functioning compiler for the Chocopy language in groups of four. The Chocopy language is a subset of the Python language. Our compiler first generated an AST before generating the relevant machine code in RISC-V. To do this, we created a parser and lexer by defining regular expressions in jflex and cup files. These files would generate a JSON file containing the AST nodes before we processed the AST in Java. While processing the AST, we performed type checking to ensure the code was valid and also implemented code optimization.",
        imgPath: "",
        attributes: ["Java", "Python", "RISC-V", "School Projects", "None"]
    };

    const PacMan = {
        name: "Pacman",
        key: 4,
        date: "September 2020 - October 2020",
        language: "Python",
        info: "This project was one of the projects in UC Berkeley's AI course. In this project, we applied concepts we learnt in class to construct efficient game agents. Using Python, I implemented algorithms such as expectimax, alpha-beta pruning, and value iteration to optimize Pacman's movement.",
        imgPath: "",
        attributes: ["Python", "School Projects", "None"]
    };

    const GhostBusters = {
        name: "GhostBusters",
        key: 9,
        date: "November 2020",
        language: "Python",
        info: "This project was another project in UC Berkeley's AI course. In this project, Pacman hunted hidden ghosts rather than the traditional game of Pacman. In order to create a non-trivial agent for pacman, we applied concepts such as probabilistic inference on hidden Markov models in order to track the hidden ghosts movements.",
        imgPath: "",
        attributes: ["Python", "School Projects", "None"]
    };

    const Classification = {
        name: "ML Classification",
        key: 8,
        date: "November 2020 - December 2020",
        language: "Python",
        info: "ML Classification was the last project in UC Berkeley's AI course. In this project, we designed and implemented neural network models for text, image and language classification in Python. Additionally, students also implemented the perceptron algorithm.",
        imgPath: "",
        attributes: ["Python", "School Projects", "None"]
    };

    const Gitlet = {
        name: "Gitlet",
        key: 6,
        date: "November 2019 - December 2019",
        language: "Java",
        info: "For the final project in UC Berkeley's Data Structures course, students had to create Gitlet, a smaller version of the popular version control system Git. In this project, we implemented basic functions that allowed users to commit, branch and merge files. Additionally, users can view the history of commits. Personally, I used hash functions to keep track of version control and used arrays and hashmaps to keep track of different commits and branches.",
        imgPath: "",
        attributes: ["Java", "School Projects", "None"]
    };

    const NumC = {
        name: "NumC",
        key: 5,
        date: "April 2020 - May 2020",
        language: "Python, C",
        info: "For the final project in UC Berkeley's Machine Structures course, students implemented a smaller version of the popular library Numpy in C. Our library NumC had basic functions such as matrix addition, multiplication and power. Students had to implement an interface between C and Python. Furthermore, we had to optimize our library, using libraries such as OpenMP and concepts of multithreading and cache hits to speed up our library.",
        imgPath: "",
        attributes: ["Python", "C", "School Projects", "None"]
    };

    const Phispel = {
        name: "Phispel",
        key: 11,
        date: "January 2020 - February 2020",
        language: "C",
        info: "This project was the first project in UC Berkeley's Machine Structures course. In this project, students implemented a spellchecker that would spellcheck an input file for a given dictionary file. This project utilized a hashmap to store valid words and involved reading and opening files as well as writing to an output file.",
        imgPath: "",
        attributes: ["C", "School Projects", "None"]
    };

    const RiscV = {
        name: "CS61Classify",
        key: 10,
        date: "February 2020 - March 2020",
        language: "RISC-V",
        info: "For the second project in UC Berkeley's Machine Structures course, students had to implement functions in RISC-V that would be used in neural networks for digit classifications. These functions included ReLu, argmax, dot product and matrix multiplication. Furthermore, students had to read and write into matrices in memory using RISC-V.",
        imgPath: "",
        attributes: ["RISC-V", "School Projects", "None"]
    };

    const DropBox = {
        name: "Encrypted File Sharing System",
        key: 3,
        date: "July 2020",
        language: "Go",
        info: "This project was assigned in UC Berkeley's Computer Security course. In this project, students had to design and implement a secure file sharing system, similar to that of Dropbox, where the datastore that files were stored in were not secure using Go. Users could also share and revoke permissions to other users. Students had to make sure that they maintained the files' integrity and confidentiality. To do this, I encrypted and HMAC-ed the data to securely store the files.",
        imgPath: "",
        attributes: ["Go", "School Projects", "None"]
    };

    const OGQueue = {
        name: "Court Queueing System",
        key: 1,
        date: "December 2020",
        language: "JavaScript, HTML, CSS",
        info: "We designed a full stack web app that is used by Cal Badminton during open gym to allow players to sign up and notifies them when it is their turn. This web app was created using React. We used the WebSocket API to allow efficient data transfer to allow real-time editing of the queue. In this project, I worked on both the front-end and backend.",
        imgPath: "",
        attributes: ["Web", "Personal Projects", "JavaScript", "None"]
    };

    const WhatWeEating = {
        name: "What We Eatin?",
        key: 7,
        date: "December 2020 to present",
        language: "Kotlin",
        info: "What We Eatin? is an Android App that randomly finds a restaurant near you. To achieve this, the app queries the Yelp fusion API to gather a list of restaurants nearby before randomly picking one. Additional features include allowing users to add their preferences for cost, food type, radius and more. Currently working on creating users using phone numbers and allowing multiple users to collaboratively pick a restaurant.",
        imgPath: "",
        attributes: ["Kotlin", "App", "Personal Projects", "None"]
    };



    const projLst = [Sprinkles, OGQueue, ChocoPy, DropBox, PacMan, NumC, Gitlet, WhatWeEating, Classification, GhostBusters,  RiscV, Phispel];
    const filteredLst = projLst.filter(function (item) {
        return item.attributes.includes(appliedFilter);
    });

    console.log(projLst);
    console.log(filteredLst);
    console.log(appliedFilter);
    return (
        <div className="project-page">
            <div className="project-content">
                <div className="project-header">
                    Projects
                </div>
                <div className="projects">
                    {filteredLst.map(item => (
                        <ProjectEntry key={item.key.toString()} {...item} />
                    ))}
                </div>
            </div>
            <div className="project-filters">
                Filter by: &nbsp;&nbsp;
                <select className="dropdown"
                    onChange={(e) => setAppliedFilter(e.target.value)}
                >
                    <option>None</option>
                    <option>Personal Projects</option>
                    <option>School Projects</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>C</option>
                    <option>Go</option>
                    <option>Kotlin</option>
                    <option>JavaScript</option>
                    <option>Web</option>
                    <option>App</option>
                </select>
            </div>
            <Particles 
                className="particles-project"
                params={particlesConfig}
            />
    
        </div>
    );

    
}
