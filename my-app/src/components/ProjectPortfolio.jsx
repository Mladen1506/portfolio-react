import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";


const ProjectPortfolio = () => {
  return (
    <ProjectItem>
      <div className="project-title" id="portfolio">My Portfolio</div>
      <div className="project-overview">
        <div className="left">
          <div className="project-img-container">
            <img src={staticFolder() + "/img/portfolio.png"} alt="" />
          </div>
          <div className="project-buttons">
            <a target="_blank" href="https://github.com/Mladen1506/portfolio-react" rel="">GitHub</a>
            <a target="_blank" href="http://mladenmakivic.com/" rel="">Live View</a>
          </div>
        </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">React</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">JS</li>
              <li className="project-tools__item">Bootstrap</li>
              <li className="project-tools__item">Express</li>
            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">My personal portfolio built using React, Bootstrap, Express. I'm continually adding projects, modifying content, and updating the look and functionality.</p>
          </div>
        </div>
      </div>
    </ProjectItem>
  );
};

export default ProjectPortfolio;