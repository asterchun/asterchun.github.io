import { React } from "react";

export function ProjectEntry(props) {
    return (
        <div className="project-entry-body">
            <div className="project-entry-text">
                <div className="project-name">
                    {props.name}
                </div>
                <div className="project-date">
                    {props.date}
                </div>
                <div className="project-info">
                    {props.info}
                </div>
            </div>
        </div>
    );
}