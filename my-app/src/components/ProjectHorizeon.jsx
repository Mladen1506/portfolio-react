import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";


const ProjectHorizeon = () => {
  return (
    <ProjectItem>
      <div className="project-title" id="horizeon">Horizeon</div>
      <div className="project-overview">
        <div className="left">
          <div className="project-img-container">
            <img src={staticFolder() + "/img/horizeon.png"} alt="" />
          </div>
          <div className="project-buttons">
            <a target="_blank" href="https://github.com/Mladen1506/horeason" rel="">GitHub</a>
            <a target="_blank" href="https://mladen1506.github.io/horeason/" rel="">Live View</a>
          </div>
        </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">HTML</li>
              <li className="project-tools__item">CSS</li>
            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">This is a web application that uses HTML and CSS to create a simple website.</p>
          </div>
        </div>
      </div>
    </ProjectItem>
  );
};

export default ProjectHorizeon;