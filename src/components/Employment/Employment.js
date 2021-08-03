import "./Employment.scss";
import Fade from "react-reveal/Fade";
import { Tab, Tabs } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const tabStyles ={
    height: 500,
    width: 800
}

function Jobs() {
    const listOfJobs =  {
            "Magnet Forensics": {
                title: "Software Developer @",
                from: "JAN 2021 - CURRENT",
                description: [
                    "Did something cool.",
                    "Did something else that was cool.",
                    "Did something else that was also cool."
                ]
            },
            "Treasurary Board of Canada": {
                title: "Junior Data Scientist @",
                from: "MAY 2019 - AUG 2019",
                description: [
                    "Did something cool.",
                    "Did something else that was cool.",
                    "Did something else that was also cool."
                ]
            },
            "ZeMA": {
                title: "Research Engineer @",
                from: "MAY 2019 - AUG 2019",
                description: [
                    "Did something cool.",
                    "Did something else that was cool.",
                    "Did something else that was also cool."
                ]
            },
            "Curtiss Wright": {
                title: "Embedded Software Engineer @",
                from: "MAY 2019 - AUG 2019",
                description: [
                    "Did something cool.",
                    "Did something else that was cool.",
                    "Did something else that was also cool."
                ]
            },
            "Lumentum": {
                title: "Design Verification & Automation Engineer @",
                from: "MAY 2019 - AUG 2019",
                description: [
                    "Did something cool.",
                    "Did something else that was cool.",
                    "Did something else that was also cool."
                ]
            },
            "ISED": {
                title: "Web Developer @",
                from: "MAY 2019 - AUG 2019",
                description: [
                    "Did something cool.",
                    "Did something else that was cool.",
                    "Did something else that was also cool."
                ]
            },

        };



    return (
        <div className="Jobs">
            <Tabs defaultActiveKey="Magnet Forensics" 
            id="jobs-tabs">

                {Object.keys(listOfJobs).map((key, i) => (
                    <Tab eventKey= {key} title= {key} key={i}>
                        <span className="job-title">
                            {listOfJobs[key]["title"] + " "}
                        </span>
                        <span className="job-company" >
                            {key}
                        </span>
                        <div className="job-from">
                            {listOfJobs[key]["from"]}
                        </div>
                        <ul className="job-description">
                            {listOfJobs[key]["description"].map(function(item, j) {
                                return (
                                    <Fade bottom delay={(j + 1)*100} key={j}>
                                        <li key={j}>{item}</li>
                                    </Fade>
                                );
                            })}
                        </ul>
                    </Tab>
                ))};
            </Tabs>
        </div>
    )
}

export default function Employment() {

    return (
        <div className="employment" id="employment">
            <Fade bottom>
                <div className="header">
                    <span className="title">/ Experience</span>
                    <Jobs style={tabStyles}></Jobs>
                </div>
            </Fade>
        </div>
    )
}