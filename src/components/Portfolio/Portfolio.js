import "./Portfolio.scss";
import Fade from "react-reveal/Fade";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <Fade bottom>
                <div className="portfolio-header">
                    <span className="portfolio-title">Portfolio 💻</span>
                    <div className="portfolio-content">
                        <p>Click on a project to learn more!</p>
                    </div>
                </div>
            </Fade>
            <div className="portfolio-content">
                <div className="portfolio-row">
                    <Fade left>
                        <div className="portfolio-proj1" style={{ backgroundColor: "#b6fcb2" }}></div>
                    </Fade>
                    <Fade right>
                        <div className="portfolio-proj2" style={{ backgroundColor: "#b6fcb2" }}></div>
                    </Fade>
                </div>
                <div className="portfolio-row">
                    <Fade left>
                        <div className="portfolio-proj2" style={{ backgroundColor: "#b6fcb2" }}></div>
                    </Fade>
                    <Fade right>
                        <div className="portfolio-proj1" style={{ backgroundColor: "#b6fcb2" }}></div>
                    </Fade>
                </div>
            </div>
        </div >
    )
}