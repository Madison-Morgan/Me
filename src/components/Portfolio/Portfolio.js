import "./Portfolio.scss";
import Fade from "react-reveal/Fade";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <Fade bottom>
                <div className="portfolio-header">
                    <span className="portfolio-title">/ Portfolio</span>
                </div>
                <div className="portfolio-content">
                    <p>Click on a project to learn more!</p>
                    <div className="portfolio-row">
                        <div className="portfolio-proj1" style={{backgroundColor : "#FCEEEF"}}></div>
                        <div className="portfolio-proj2" style={{backgroundColor : "#EBFDFA"}}></div>
                    </div>
                    <div className="portfolio-row">
                        <div className="portfolio-proj2" style={{backgroundColor : "#E9F1FD"}}></div>
                        <div className="portfolio-proj1" style={{backgroundColor : "#EDE7FC"}}></div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}