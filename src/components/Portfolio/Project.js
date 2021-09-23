import "./Project.scss";
import { useEffect, useState } from "react";

export default function Project(props) {

    const [value, setValue] = useState(props.activeState);
    useEffect(() => { 
        setValue(props.activeState);
        console.log("hrlo"+props.activeState);
    }, [props.activeState]);


    return (
        <div
            className={`${value} portfolio-overlay`}>
            <h3>{props.header}</h3>
            <p>{props.text}</p>
            <ul className="portfolio-toolsUsed">
                {props.tech.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <div className="portfolio-viewProject">
                <a href={props.liveLink} target="_blank" className="button">view live</a>
                <a href={props.githubLink} target="_blank" className="button">github</a>
            </div>
        </div>
    )

}