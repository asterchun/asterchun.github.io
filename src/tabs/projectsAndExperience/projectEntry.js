import { React } from "react";

export function ProjectEntry(props) {
    return (
        <div className="project-entry-body">
            <div className="project-entry-text">
                <div className="project-name">
                    {props.name}
                </div>
                <div className="project-language">
                    Programming language: {props.language}
                </div>
                <div className="project-date">
                    {props.date}
                </div>
                <div className="project-info">
                    {props.info}
                </div>
            </div>
            {props.imgPath ? <img src={props.imgPath} alt={props.name + " pic"} className="project-pic" /> : null}
        </div>
    );
}