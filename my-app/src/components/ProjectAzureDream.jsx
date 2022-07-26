import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";


const ProjectAzureDream = () => {
  return (
    <ProjectItem>
      <div className="project-title" id="azureapp">Azure Dream Day Spa</div>
      <div className="project-overview">
        <div className="left">
          <div className="project-img-container">
            <img src={staticFolder() + "/img/azure.png"} alt="" />
          </div>
          <div className="project-buttons">
            <a target="_blank" href="https://github.com/Mladen1506/spa-center" rel="">GitHub</a>
            <a target="_blank" href="https://azuredreamspa.com/" rel="">Live View</a>
          </div>
        </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">React</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">JS</li>
            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">This is my first project as Full Stack Web Developer. Completely redesigned existing website using React and then transfered files to customer Word Press Theme.</p>
          </div>
        </div>
      </div>
    </ProjectItem>
  );
};

export default ProjectAzureDream;