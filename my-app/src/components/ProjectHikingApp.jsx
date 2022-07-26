import { staticFolder } from "../utils/url-lib";
import ProjectItem from "./ProjectItem";


const ProjectHikingApp = () => {
  return (
    <ProjectItem>
      <div className="project-title" id="hikingapp">Hiking App</div>
      <div className="project-overview">
        <div className="left">
          <div className="project-img-container">
            <img src={staticFolder() + "/img/hiking.png"} alt="" />
          </div>
          <div className="project-buttons">
            <a target="_blank" href="https://github.com/Mladen1506/hiking-react" rel="">GitHub</a>
            <a target="_blank" href="https://mladen-hiking-app.herokuapp.com/" rel="">Live View</a>
          </div>
        </div>
        <div className="right">
          <div className="project-tools">
            <h3 className="project-subtitle">Tools:</h3>
            <ul className="project-tools__items">
              <li className="project-tools__item">React</li>
              <li className="project-tools__item">CSS</li>
              <li className="project-tools__item">JS</li>
              <li className="project-tools__item">Node.js</li>
              <li className="project-tools__item">GraphQL</li>
              <li className="project-tools__item">MongoDB / Mongoose</li>
            </ul>
          </div>
          <div className="project-description">
            <h3 className="project-subtitle">Description:</h3>
            <p className="project-paragraph">Hiking App allows users to create their own Hiking Route. Users can do CRUD functions with his own Hike. Other Users can view other users hikes, make review for the same route, they can join to other people tours.</p>
          </div>
        </div>
      </div>
    </ProjectItem>
  );
};

export default ProjectHikingApp;